package com.generation.trocageek.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.trocageek.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	

}
