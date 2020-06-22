import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../Model/Produto';
import { Usuario } from '../Model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Negociacao } from '../Model/Negociacao';

@Component({
  selector: 'app-negociacao',
  templateUrl: './negociacao.component.html',
  styleUrls: ['./negociacao.component.css']
})
export class NegociacaoComponent implements OnInit {
  produto: Produto = new Produto;
  usuario: Usuario = new Usuario;
  negociacao: Negociacao = new Negociacao;


  constructor(private produtoService: ProdutoService, private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      return this.router.navigate(['/login']);
    }

    this.usuario.id = parseInt(localStorage.getItem('idUsuario'));
    this.negociacao.idComprador = this.usuario;
    console.log(this.negociacao.idComprador);


    let codigo = this.route.snapshot.params['codigo'];
    this.findByCodigo(codigo);
  }

  findByCodigo(codigo: number) {
    this.produtoService.getProdutoEspecifico(codigo).subscribe((resp: Produto) => {
      this.produto = resp;
    })
  }

}
