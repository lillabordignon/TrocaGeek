import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';

@Component({
  selector: 'app-meusprodutos',
  templateUrl: './meusprodutos.component.html',
  styleUrls: ['./meusprodutos.component.css']
})
export class MeusprodutosComponent implements OnInit {

  idUsuario: number;
  listaProdutos: Produto [];



  constructor(private produtosService: ProdutoService, private route: Router) { }

  ngOnInit() {
    this.idUsuario = parseInt(localStorage.getItem('idUsuario'));
    if(localStorage.getItem('idUsuario') == null) {
      this.route.navigate(['/login'])
    }
    else {
      this.produtosService.getProdutosByIdUsuario(this.idUsuario).subscribe((resp:Produto [])=> {
        this.listaProdutos = resp;
      })

    }
  }

}
