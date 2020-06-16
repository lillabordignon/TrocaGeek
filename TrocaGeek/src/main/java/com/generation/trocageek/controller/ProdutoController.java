package com.generation.trocageek.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
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
import org.springframework.web.util.UriComponentsBuilder;

import com.generation.trocageek.model.Produto;
import com.generation.trocageek.repository.ProdutoRepository;

@RestController
@RequestMapping("/produtos")
@CrossOrigin("*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository repository;
	
	//Pageable default define o padrão de paginacao caso o usuario não escolhe nada,
	//sera de 10 itens, ordenado por data de criacao em descresente
	@GetMapping
	public Page<Produto> listar (@PageableDefault(page = 0,
		size = 10, sort = "date" ,direction = Direction.DESC) Pageable paginacao) {
		
		return repository.findAll(paginacao);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Produto> detalhar (@PathVariable Long codigo){
		Optional<Produto> produto = repository.findById(codigo);
		if(produto.isPresent()) {
			return ResponseEntity.ok(produto.get());
		}
		return ResponseEntity.badRequest().build();
	}
	
	//find by nome 
	@GetMapping("/nome/{nome}")
	public Page<Produto> buscarPorNome(@PathVariable String nome,@PageableDefault(page = 0,
		size = 10, sort = "date" ,direction = Direction.DESC)
			Pageable paginacao) {
		
		return repository.findBynomeContainingIgnoreCase(nome, paginacao);
		
	}
	
	//find by categoria 
	@GetMapping("/categoria/{nome}")
	public Page<Produto> buscarPorNomeCategoria(@PathVariable String nome, @PageableDefault(page = 0,
		size = 10, sort = "date" ,direction = Direction.DESC) Pageable paginacao) {
		
		return repository.findByidCategoria_nomeCategoriaContainingIgnoreCase(nome, paginacao);
	}
	
	@PostMapping
	public ResponseEntity<Produto> cadastrar (@RequestBody Produto produto, UriComponentsBuilder uriBuilder) {
		repository.save(produto);
		URI uri = uriBuilder.path("/produto/{codigo}").buildAndExpand(produto.getCodigo()).toUri();
		
		return ResponseEntity.created(uri).body(produto);		
	}
	
	@PutMapping
	public ResponseEntity<Produto> atualizar (@RequestBody Produto produto) {
		return ResponseEntity.ok(repository.save(produto));
	}
	
	@DeleteMapping("/{codigo}")
	public ResponseEntity<Produto> deletar (@PathVariable Long codigo) {
		Optional<Produto> produto = repository.findById(codigo);
		if(produto.isPresent()) {
			repository.deleteById(codigo);
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.badRequest().build();
		
	}

}
