package com.generation.trocageek.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.trocageek.model.Negociacao;

public interface NegociacaoRepository extends JpaRepository<Negociacao, Long>{

	public List<Negociacao> findByidVendedor_id(Long id);
	
	public List<Negociacao> findByidComprador_id(Long id);
	
	public void deleteAllByidComprador_id(Long id);
	
	public void deleteAllByidVendedor_id(Long id);
}
