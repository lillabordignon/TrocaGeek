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

  //variaveis do modo noturno
  modoNoturno: boolean = false;
  corBodyNoturno: string = '#0f0f0f'
  corFontesNoturno: string = '#ffffff'

  corBodyNaoNoturno: string = '#DBDEE3'


  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0);

    let codigo = this.route.snapshot.params['codigo'];
    this.findByCodigo(codigo);
  }

  modoNoturnoFunction() {
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }


  findByCodigo(codigo: number) {
    this.produtoService.getProdutoEspecifico(codigo).subscribe((resp: Produto) => {
      this.produto = resp;
    })
  }
}
