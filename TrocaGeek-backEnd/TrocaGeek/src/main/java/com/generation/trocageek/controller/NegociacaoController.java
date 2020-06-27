package com.generation.trocageek.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.trocageek.model.Negociacao;
import com.generation.trocageek.model.NegociacaoEnum;
import com.generation.trocageek.repository.NegociacaoRepository;

@RestController
@RequestMapping("/negociacao")
@CrossOrigin("*")
public class NegociacaoController {

	@Autowired
	private NegociacaoRepository repository;

	@GetMapping
	public List<Negociacao> GetAll() {
		return repository.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Negociacao> Detalhar(@PathVariable Long id) {

		Optional<Negociacao> negociacao = repository.findById(id);
		if (negociacao.isPresent()) {
			return ResponseEntity.ok().body(negociacao.get());
		}

		return ResponseEntity.notFound().build();

	}

	
	@GetMapping("/vendas/{id}")
	public ResponseEntity<List<Negociacao>> Vendas(@PathVariable Long id){
		return ResponseEntity.ok().body(repository.findByidVendedor_id(id));
	}
	
	
	@GetMapping("/compras/{id}")
	public ResponseEntity<List<Negociacao>> Compras(@PathVariable Long id){
		return ResponseEntity.ok().body(repository.findByidComprador_id(id));
	}
	
	
	
	
	@PostMapping
	public ResponseEntity<Negociacao> post(@RequestBody Negociacao negociacao) {
		System.out.println(negociacao.getIdVendedor());
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(negociacao));
			}

	
	@PutMapping("/{id}")
	public ResponseEntity<Negociacao> put(@PathVariable Long id, @RequestBody int statusNegociacao){
		Optional<Negociacao> negociacao = repository.findById(id);
		if(negociacao.isPresent()) {
			if(statusNegociacao == 1) {
				negociacao.get().setStatusNegociacao(NegociacaoEnum.ANDAMENTO);
				return ResponseEntity.ok().body(repository.save(negociacao.get()));
			} else if (statusNegociacao == 2) {
				negociacao.get().setStatusNegociacao(NegociacaoEnum.CONCLUIDA);
				return ResponseEntity.ok().body(repository.save(negociacao.get()));
			} else {
				negociacao.get().setStatusNegociacao(NegociacaoEnum.CANCELADA);
				return ResponseEntity.ok().body(repository.save(negociacao.get()));
			}
		}
		
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/editar")
	public ResponseEntity<Negociacao> put(@RequestBody Negociacao negociacaoEditar){
		return ResponseEntity.ok(repository.save(negociacaoEditar));
	
	}
	
}
