import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NegociacaoService } from 'src/app/service/negociacao.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/Model/Produto';
import { Usuario } from 'src/app/Model/usuario';
import { Negociacao } from 'src/app/Model/Negociacao';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  produto: Produto = new Produto;
  usuario: Usuario = new Usuario;
  negociacao: Negociacao = new Negociacao;
  idLogado: number = parseInt(localStorage.getItem('idUsuario'));

  donoDoProduto: boolean;

  negociacaoEmAndamento: boolean = true;
  negociacaoConcluida: boolean;

  constructor(private negociacaoService: NegociacaoService, private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']

    this.buscarNegociacao(id);

    setTimeout(() => {
      if (this.negociacao.dataFinalNegociacao != null) {
        this.negociacaoConcluida = true;
        this.negociacaoEmAndamento = false;

      }
    }, 2000)

    //checa se o usuario é o fornecedor para liberar o botao de Concluir
    setTimeout(() => {
      if (this.idLogado == this.negociacao.idVendedor.id) {
        this.donoDoProduto = true;

        console.log("id logado" + this.idLogado);
        console.log("id vendedor" + this.negociacao.idVendedor.id);
      }
    }, 500);


  }

  // donoProduto() {

  //     console.log("id logado" + this.idLogado);
  //     console.log("id vendedor" + this.negociacao.idVendedor.id);
  //   }
  // }


  buscarNegociacao(id: number) {
    this.negociacaoService.getNegociacaoById(id).subscribe((resp: Negociacao) => {
      this.negociacao = resp;
      console.log("Negociação nº" + resp);
    })
  }

  //conclui a negociação seta uma data final e passa o produto para inativo
  concluirNegociacao(id: number, statusNegociacao: number) {
    this.negociacaoService.putNegociacao(id, statusNegociacao).subscribe((resp: Negociacao) => {
      this.negociacao = resp;
      this.negociacaoEmAndamento = false;
      window.scroll(0, 0)
      this.negociacao.idProduto.ativo = false;
      this.negociacao.dataFinalNegociacao = new Date();
      this.negociacaoConcluida = true;
      this.atualizarNegociacao(this.negociacao);
      this.produtoService.putProduto(this.negociacao.idProduto).subscribe((resp: Produto) => {
        this.produto = resp;
      })
    }
    )
  }

  //Cancela a negociacao e seta uma data final
  cancelarNegociacao(id: number, statusNegociacao: number) {
    this.negociacaoService.putNegociacao(id, statusNegociacao).subscribe((resp: Negociacao) => {
      this.negociacao = resp;
      this.negociacaoEmAndamento = false;
      this.negociacao.dataFinalNegociacao = new Date();
      window.scroll(0, 0)
      this.atualizarNegociacao(this.negociacao);
      this.negociacaoConcluida = true;
    })
  }


  atualizarNegociacao(negociacao: Negociacao) {
    this.negociacaoService.putNegociacaoInteira(negociacao).subscribe((resp: Negociacao) => {
      this.negociacao = resp;
    })
  }


}
