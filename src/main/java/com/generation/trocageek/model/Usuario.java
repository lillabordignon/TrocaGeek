package com.generation.trocageek.model;

import java.math.BigInteger;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "usuario")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	

	private BigInteger cpf;
	
	@NotNull
	@Size(min = 2, max = 100)
	private String nome;
	
	@NotNull
	@Size(min = 2, max = 100)
	private String email;
	
	@NotNull
	@Size(min = 6, max = 100)
	private String senha;
	
	
	private BigInteger telefone;
	
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="codigo_permissao")
	private Permissao permissao;
	


	public Permissao getPermissao() {
		return permissao;
	} 


	public void setPermissao(Permissao codigo) {
		this.permissao = codigo;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public BigInteger getCpf() {
		return cpf;
	}


	public void setCpf(BigInteger cpf) {
		this.cpf = cpf;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getSenha() {
		return senha;
	}


	public void setSenha(String senha) {
		this.senha = senha;
	}


	public BigInteger getTelefone() {
		return telefone;
	}


	public void setTelefone(BigInteger telefone) {
		this.telefone = telefone;
	}


	
	

}
