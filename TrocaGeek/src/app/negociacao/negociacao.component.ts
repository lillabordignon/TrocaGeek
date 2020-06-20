import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../Model/Produto';

@Component({
  selector: 'app-negociacao',
  templateUrl: './negociacao.component.html',
  styleUrls: ['./negociacao.component.css']
})
export class NegociacaoComponent implements OnInit {
  produto: Produto = new Produto;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let codigo = this.route.snapshot.params['codigo'];
    this.findByCodigo(codigo);
  }

  findByCodigo(codigo: number) {
    this.produtoService.getProdutoEspecifico(codigo).subscribe((resp: Produto) => {
      this.produto = resp;
    })
  }

}
