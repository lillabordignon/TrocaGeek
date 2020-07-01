import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../Model/Produto';
import { Usuario } from '../Model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Negociacao } from '../Model/Negociacao';
import { NegociacaoService } from '../service/negociacao.service';
import { getLocaleDirection } from '@angular/common';

@Component({
  selector: 'app-negociacao',
  templateUrl: './negociacao.component.html',
  styleUrls: ['./negociacao.component.css']
})
export class NegociacaoComponent implements OnInit {

  //variaveis do modo noturno
  modoNoturno: boolean = false;
  corBodyNoturno: string = '#0f0f0f'
  corFontesNoturno: string = '#ffffff'

  corBodyNaoNoturno: string = '#DBDEE3'

  produto: Produto = new Produto;
  usuario: Usuario = new Usuario;
  negociacao: Negociacao = new Negociacao;


  constructor(private produtoService: ProdutoService, private usuarioService: UsuarioService, private negociacaoService: NegociacaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    //validação se o usuario esta logado
    if (localStorage.getItem('idUsuario') == null) {
      return location.assign('/login')
    }

    //captura do usuario logado
    this.usuario.id = parseInt(localStorage.getItem('idUsuario'));
    //traz o usuario Logado com todos os dados dele
    this.findByIdUsuario(this.usuario.id);


    //pega o codigo do produto passado na URL
    let codigo = this.route.snapshot.params['codigo'];
    //traz o produto (pelo codigo passado na URL)com todos os dados dele inclusive do USUARIO  
    this.findByCodigo(codigo);

    //chama a negociação

    if (localStorage.getItem('noturno') == 'true') {
      this.modoNoturno = true;
    }

  }

  modoNoturnoFunction() {
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }

  //Busca o produto na API passa passando o ID
  findByCodigo(codigo: number) {
    this.produtoService.getProdutoEspecifico(codigo).subscribe((resp: Produto) => {
      this.produto = resp;
      //atribui o produto na negociação
      this.negociacao.idProduto = this.produto;
      //atribui o vendedor pelo produto na negociação
      this.negociacao.idVendedor = this.produto.idUsuario;
    })
  }

  //Busca o usuario na API passa passando o ID
  findByIdUsuario(codigo: number) {
    this.usuarioService.getByIdUsuario(codigo).subscribe((resp: Usuario) => {
      this.usuario = resp;

      //atribui o comprador (Usuario ativo) capturado pelo Token
      this.negociacao.idComprador = this.usuario;
    })
  }

  negociar() {
    if (this.negociacao.idVendedor.id == this.negociacao.idComprador.id) {
      return alert("Você não pode comprar seu próprio produto");
    }
    this.negociacaoService.postNegociacao(this.negociacao).subscribe((resp: Negociacao) => {
      this.negociacao = resp;
      location.assign('negociacao-detalhe/' + this.negociacao.idNegociacao)
    })
  }

  editarNegociacao() {

  }
}
