import { Component, OnInit } from '@angular/core';
import { Negociacao } from 'src/app/Model/Negociacao';
import { NegociacaoService } from 'src/app/service/negociacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minhasnegociacoes',
  templateUrl: './minhasnegociacoes.component.html',
  styleUrls: ['./minhasnegociacoes.component.css']
})
export class MinhasnegociacoesComponent implements OnInit {

  listaVendas: Negociacao[];
  listaCompras: Negociacao[];
  idUsuario: number;

  vendas: Negociacao = new Negociacao;
  compras: Negociacao = new Negociacao;

  constructor(private negociacaoService: NegociacaoService, private router: Router) { }

  ngOnInit(): void {
    this.idUsuario = parseInt(localStorage.getItem('idUsuario'));
    let id = localStorage.getItem("idUsuario");
    this.buscarVendas(id);
    this.buscarCompras(id);
  }


  buscarVendas(id) {
    this.negociacaoService.getVendas(id).subscribe((resp: Negociacao[]) => {
      this.listaVendas = resp;
    })
  }

  buscarCompras(id) {
    this.negociacaoService.getCompras(id).subscribe((resp: Negociacao[]) => {
      this.listaCompras = resp;
    })

  }




}
