package com.generation.trocageek.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.generation.trocageek.model.Permissao;
import com.generation.trocageek.repository.PermissaoRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/permissao")
public class PermissaoController {
	
	@Autowired
	private PermissaoRepository repository;
	
	@GetMapping
	public List<Permissao> listar () {
		return repository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Permissao> detalhar (@PathVariable Integer codigo){
		Optional<Permissao> permissao = repository.findById(codigo);
		if(permissao.isPresent()) {
			return ResponseEntity.ok(permissao.get());
		}
		return ResponseEntity.badRequest().build();
	}

	@PostMapping
	public ResponseEntity<Permissao> cadastrar (@RequestBody Permissao permissao) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(permissao));
	}
	
	@PutMapping
	public ResponseEntity<Permissao> atualizar (@RequestBody Permissao permissao) {
		return ResponseEntity.ok(repository.save(permissao));
	}
	
	@DeleteMapping("/{codigo}")
	public ResponseEntity<Permissao> deletar (@PathVariable Integer codigo) {
		Optional<Permissao> permissao = repository.findById(codigo);
		if(permissao.isPresent()) {
			repository.deleteById(codigo);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.badRequest().build();
	}
}
