package com.generation.trocageek.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "negociacao")
public class Negociacao {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idNegociacao;
	
	@ManyToOne
	private Usuario idVendedor;
	
	@ManyToOne
	private Usuario idComprador;
	
	@ManyToOne
	private Produto idProduto;

	@Temporal(TemporalType.TIMESTAMP)
	private Date dataInicioNegociacao = new java.sql.Date(System.currentTimeMillis());
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dataFinalNegociacao = null;
	
	private boolean status = true;

	public Long getIdNegociacao() {
		return idNegociacao;
	}

	public void setIdNegociacao(Long idNegociacao) {
		this.idNegociacao = idNegociacao;
	}

	public Usuario getIdVendedor() {
		return idVendedor;
	}

	public void setIdVendedor(Usuario idVendedor) {
		this.idVendedor = idVendedor;
	}

	public Usuario getIdComprador() {
		return idComprador;
	}

	public void setIdComprador(Usuario idComprador) {
		this.idComprador = idComprador;
	}

	public Produto getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(Produto idProduto) {
		this.idProduto = idProduto;
	}

	public Date getDataInicioNegociacao() {
		return dataInicioNegociacao;
	}

	public void setDataInicioNegociacao(Date dataInicioNegociacao) {
		this.dataInicioNegociacao = dataInicioNegociacao;
	}

	public Date getDataFinalNegociacao() {
		return dataFinalNegociacao;
	}

	public void setDataFinalNegociacao(Date dataFinalNegociacao) {
		this.dataFinalNegociacao = dataFinalNegociacao;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
	
	
}
