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

    //variaveis do modo noturno
    modoNoturno: boolean = false;
    corBodyNoturno: string = '#010101'
    corFontesNoturno: string = '#ffffff'
  
    corBodyNaoNoturno: string = '#DBDEE3'

  constructor(private negociacaoService: NegociacaoService, private router: Router) { }

  ngOnInit(): void {
    window.scroll(0,0)
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
