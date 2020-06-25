import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/Model/Produto';
import { Conteudo } from 'src/app/Model/Conteudo';
import { Categoria } from 'src/app/Model/Categoria'

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css']
})

export class AcessoriosComponent implements OnInit {
  // variaveis para resposta da api
  listaProdutos: Produto[]
  produto: Produto = new Produto;
  conteudo: Conteudo = new Conteudo;
  caterogia: Categoria = new Categoria;

  //variaveis de opcoes do usuario
  barraPesquisa: string;
  pagina: number = 0;
  private quantidade: number = 8;
  numeroDePaginas: number;
  arrayDePaginas: number[] = [0];
  ultimaPagina: boolean;

  //variaveis do modo noturno
  modoNoturno: boolean = false;
  corBodyNoturno: string = '#010101'
  corFontesNoturno: string = '#ffffff'

  //variaveis ordenacao produto
  ordenar: string;
  ordem: string;
  quantidadePorPagina: string;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllbyCategoria("acessórios");
    this.verificarNumeroDePaginas();

    // ao iniciar seta as variaveis com os valores do filtro
    this.ordenar = (<HTMLInputElement>document.getElementById("ordenarPor")).value;
    this.ordem = (<HTMLInputElement>document.getElementById("ordem")).value;
    this.quantidade = parseInt((<HTMLInputElement>document.getElementById("quantidade")).value);

    if (localStorage.getItem('noturno') == 'true') {
      this.modoNoturno = true;
    }
  }

  modoNoturnoFunction() {
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }

  findAllProdutos(pagina, quantidade) {
    this.produtoService.getAllProdutos(pagina, quantidade).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
      this.numeroDePaginas = this.conteudo.totalPages;
      this.ultimaPagina = this.conteudo.last;
      this.verificarNumeroDePaginas()

    })
  }

  findAllbyCategoria(nome: string) {
    this.produtoService.getProdutosByCategoria(nome).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
      this.numeroDePaginas = this.conteudo.totalPages;
      this.ultimaPagina = this.conteudo.last;
      this.verificarNumeroDePaginas()
    })
  }

  buscarPorNomeProduto(nome, pagina, quantidade) {
    this.produtoService.getByNomeprodutos(nome, pagina, quantidade).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
      this.numeroDePaginas = this.conteudo.totalPages;
      this.verificarNumeroDePaginas()
    })
  }
  buscarPorNomeProdutoOrdenados(nome, pagina, quantidade, ordenacao, ordem) {
    this.produtoService.getByNomeprodutosOrdenados(nome, pagina, quantidade, ordenacao, ordem).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
      this.numeroDePaginas = this.conteudo.totalPages;
      this.verificarNumeroDePaginas()
    })
  }

  buscarProdutosOrdenados(pagina, quantidade, ordenacao, ordem) {
    this.produtoService.getByProdutosOrdenados(pagina, quantidade, ordenacao, ordem).subscribe((resp: Conteudo) => {
      this.conteudo = resp;
      this.listaProdutos = this.conteudo.content;
      this.numeroDePaginas = this.conteudo.totalPages;
      this.verificarNumeroDePaginas()
    })

  }



  buttonPesquisar() {
    // se a barra de pesquisa for vazia ou menor que 1 ele mostra todos os produtos
    if (this.barraPesquisa == "" || this.barraPesquisa.length < 1 || this.barraPesquisa == null) {
      this.findAllProdutos(0, this.quantidade)
      this.pagina = 0;
      this.verificarNumeroDePaginas()
    } else {
      this.buscarPorNomeProdutoOrdenados(this.barraPesquisa, 0, this.quantidade, this.ordenar, this.ordem);
      this.pagina = 0;
      this.verificarNumeroDePaginas()
    }
  }

  paginar(pagina: any) {
    this.pagina = pagina;
    if (this.barraPesquisa != null) {
      this.buscarPorNomeProdutoOrdenados(this.barraPesquisa, this.pagina, this.quantidade, this.ordenar, this.ordem)
      window.scroll(0, 10)
    } else if (this.ordem != 'desc' || this.ordenar != 'date') {
      this.buscarProdutosOrdenados(this.pagina, this.quantidade, this.ordenar, this.ordem);

    }

    else {
      this.findAllProdutos(pagina, this.quantidade);
      window.scroll(0, 500)
    }

  }

  verificarNumeroDePaginas() {
    if (this.numeroDePaginas == 0) {
      this.arrayDePaginas.splice(0, this.arrayDePaginas.length)
    }
    this.arrayDePaginas.splice(0, this.numeroDePaginas)
    for (let i = 0; i < this.numeroDePaginas; i++) {
      this.arrayDePaginas[i] = i;
    }
  }

  filtrarProdutos() {
    this.ordenar = (<HTMLInputElement>document.getElementById("ordenarPor")).value;
    this.ordem = (<HTMLInputElement>document.getElementById("ordem")).value;
    this.quantidade = parseInt((<HTMLInputElement>document.getElementById("quantidade")).value);
    this.buscarProdutosOrdenados(this.pagina, this.quantidade, this.ordenar, this.ordem);
    this.verificarNumeroDePaginas()
  }


}
