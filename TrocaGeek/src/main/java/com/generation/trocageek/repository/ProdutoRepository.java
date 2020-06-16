package com.generation.trocageek.repository;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.trocageek.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	
	public Page<Produto> findBynomeContainingIgnoreCase(String nome, Pageable paginacao);
	
	public Page<Produto> findByidCategoria_nomeCategoriaContainingIgnoreCase(String nome, Pageable paginacao);
	

}
