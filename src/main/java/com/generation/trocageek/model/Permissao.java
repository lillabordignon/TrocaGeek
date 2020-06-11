package com.generation.trocageek.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "permissao")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Permissao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigoPermissao;
	
	private String nome;
	
	@OneToOne(mappedBy = "permissao")
	private Usuario usuario;

	public Integer getCodigoPermissao() {
		return codigoPermissao;
	}

	public void setCodigoPermissao(Integer codigoPermissao) {
		this.codigoPermissao = codigoPermissao;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}


	

}
