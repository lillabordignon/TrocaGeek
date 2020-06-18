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
  numeroDePaginas:number ;

  pesquisaBarra: string;



  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllProdutos(this.pagina, this.quantidade);
    console.log(this.conteudo.totalPages)

  }

  findAllProdutos(pagina, quantidade) {
    this.produtoService.getAllProdutos(pagina, quantidade).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
      this.numeroDePaginas = this.conteudo.totalPages;
      console.log(resp);
      
    })
  }
  buscarPorNomeProduto(nome) {
    this.produtoService.getByNomeprodutos(nome).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
    })
  }

  buttonPesquisar() {
    if(this.barraPesquisa == "") {
      this.findAllProdutos(this.pagina, this.quantidade)
    }else {
    this.buscarPorNomeProduto(this.barraPesquisa);
  }
  }

  paginar(pagina: any) {
    this.pagina = pagina;
    this.findAllProdutos(pagina, this.quantidade);
    window.scroll(0,0)
  }

  verificarNumeroDePaginas(){

  }
}

