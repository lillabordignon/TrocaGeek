package com.generation.trocageek.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.trocageek.model.Usuario;
import com.generation.trocageek.model.UsuarioLogin;
import com.generation.trocageek.repository.UsuarioRepository;
import com.generation.trocageek.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository repository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public List<Usuario> listar () {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> detalhar (@PathVariable Long id) {
		 Optional<Usuario> usuario = repository.findById(id);
		 if(usuario.isPresent()) {
			 return ResponseEntity.ok(usuario.get());
		 }
		 return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> cadastrar (@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(usuarioService.cadastrarUsuario(usuario));
	}
	
	@PostMapping("/logar")
	public ResponseEntity<UsuarioLogin> Autentication (@RequestBody Optional<UsuarioLogin> usuario) {
		return usuarioService.logar(usuario).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PutMapping
	public ResponseEntity<Usuario> atualizar (@RequestBody Usuario usuario) {
		return ResponseEntity.ok(repository.save(usuario));
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Usuario> deletar (@PathVariable Long id) {
		Optional<Usuario> usuario = repository.findById(id);
		if(usuario.isPresent()) {
			repository.deleteById(id);
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.badRequest().build();
	}
	
	
}
