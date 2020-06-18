import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../Model/Produto';
import { Conteudo } from '../Model/Conteudo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos: Produto[]
  produto: Produto = new Produto;
  conteudo: Conteudo = new Conteudo;
  conteudoPesquisa: Conteudo = new Conteudo;

  barraPesquisa: string;

  private pagina: number = 0;
  private quantidade: number = 10;

  pesquisaBarra: string;



  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllProdutos(this.pagina, this.quantidade);
  }

  findAllProdutos(pagina, quantidade) {
    this.produtoService.getAllProdutos(pagina, quantidade).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
    })
  }
  buscarPorNomeProduto(nome) {
    this.produtoService.getByNomeprodutos(nome).subscribe((resp: Conteudo) => {
      this.conteudoPesquisa = resp;
      this.listaProdutos = this.conteudoPesquisa.content;
    })
  }

  buttonPesquisar() {
    this.buscarPorNomeProduto(this.barraPesquisa);

  }

  paginar(pagina: any) {
    this.pagina = pagina;
    this.findAllProdutos(pagina, this.quantidade);
  }
}

