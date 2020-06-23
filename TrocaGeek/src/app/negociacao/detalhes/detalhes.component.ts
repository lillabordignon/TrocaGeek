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

  constructor(private negociacaoService: NegociacaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    console.log(id)

    this.buscarNegociacao(id);
  }


  buscarNegociacao(id: number) {
    this.negociacaoService.getNegociacaoById(id).subscribe((resp: Negociacao) => {
      this.negociacao = resp;
    })
  }
}
