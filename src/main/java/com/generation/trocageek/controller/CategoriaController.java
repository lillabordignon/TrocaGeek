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
import org.springframework.web.bind.annotation.RestController;

import com.generation.trocageek.model.Categoria;
import com.generation.trocageek.repository.CategoriaRepository;

@RequestMapping("/categoria")
@RestController
public class CategoriaController {
	
	@Autowired
	private CategoriaRepository repository;
	
	@GetMapping
	public List<Categoria> listar () {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Categoria> detalhar (@PathVariable Integer id) {
		//Verificar se contem o id no banco
		Optional<Categoria> categoria = repository.findById(id);
			if(categoria.isPresent()) {
				return ResponseEntity.ok(categoria.get());
			}
		return ResponseEntity.badRequest().build();	
		
	}
	
	@PostMapping
	public ResponseEntity<Categoria> cadastrar (@RequestBody Categoria categoria) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(categoria));
	}
	
	@PutMapping
	public ResponseEntity<Categoria> atualizar (@RequestBody Categoria categoria) {
		return ResponseEntity.ok(repository.save(categoria));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Categoria> deletar (@PathVariable Integer id) {
		Optional<Categoria> categoria = repository.findById(id);
		if(categoria.isPresent()) {
			repository.deleteById(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.badRequest().build();
	}
	

}
