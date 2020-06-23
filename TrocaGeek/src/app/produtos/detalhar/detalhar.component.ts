import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {

  produto: Produto = new Produto;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let codigo = this.route.snapshot.params['codigo'];
    this.findByCodigo(codigo);
  }

  findByCodigo(codigo: number) {
    this.produtoService.getProdutoEspecifico(codigo).subscribe((resp: Produto) => {
      this.produto = resp;
    })
  }





}
