import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Model/Produto';


@Component({
  selector: 'app-meusprodutos',
  templateUrl: './meusprodutos.component.html',
  styleUrls: ['./meusprodutos.component.css']
})
export class MeusprodutosComponent implements OnInit {

  idUsuario: number;
  listaProdutos: Produto[];

  apagado:boolean = false;

   //variaveis modo noturno
   modoNoturno:boolean ;
   corBodyNoturno: string = '#010101'
   corFonteNoturno: string = '#ffffff'




  constructor(private produtosService: ProdutoService, private route: Router) { }

  ngOnInit() {
    this.idUsuario = parseInt(localStorage.getItem('idUsuario'));
    if (localStorage.getItem('idUsuario') == null) {
      this.route.navigate(['/login'])
    }
    else {

      this.produtosService.getProdutosByIdUsuario(this.idUsuario).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp;
      })

    }
    if(localStorage.getItem('noturno') == 'true') {
      this.modoNoturno = true;
    }
    window.scroll(0,0)
  }

  apagarProduto(codigo) {
    if(window.confirm("Deseja apagar ?")) {
      this.produtosService.deletarProduto(codigo).subscribe(()=> {
        this.apagado = true;
        window.scroll(0,0)
        
        setTimeout(() => {
          this.apagado = false;
          location.assign('/usuarios/meusprodutos');
        }, 2500);
      })

    }
     
  }

  modoNoturnoFunction(){
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }
  
}
