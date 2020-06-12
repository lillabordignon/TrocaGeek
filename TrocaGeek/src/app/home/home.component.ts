import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import {Produto} from '../Model/Produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

listaProdutos: Produto []
produto: Produto = new Produto;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(){
    this.findAllProdutos();
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto [])=> {
      this.listaProdutos = resp;
    })
  }
}
