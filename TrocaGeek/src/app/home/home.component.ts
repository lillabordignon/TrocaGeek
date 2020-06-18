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
  private quantidade: number = 12;
  numeroDePaginas:number ;
  arrayDePaginas:number[] =[0];
  ultimaPagina:boolean;

  pesquisaBarra: string;

  teste:number;



  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllProdutos(this.pagina, this.quantidade);

  }

  findAllProdutos(pagina, quantidade) {
    this.produtoService.getAllProdutos(pagina, quantidade).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
      this.numeroDePaginas = this.conteudo.totalPages;
      this.ultimaPagina = this.conteudo.last;
      this.verificarNumeroDePaginas()
      console.log(this.teste);

    })
  }
  buscarPorNomeProduto(nome) {
    this.produtoService.getByNomeprodutos(nome).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
      this.numeroDePaginas = this.conteudo.totalPages;
      this.verificarNumeroDePaginas()
    })
  }

  buttonPesquisar() {
    // se a barra de pesquisa for vazia ou menor que 1 ele mostra todos os produtos
    if(this.barraPesquisa == "" || this.barraPesquisa.length < 1 || this.barraPesquisa == null) {
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
    for(let i = 0; i < this.numeroDePaginas; i++){
      this.arrayDePaginas[i] = i;
    }  
  }

  
}

