import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/Model/Produto';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/Model/usuario';
import { Categoria } from 'src/app/Model/Categoria';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto;
  usuario: Usuario = new Usuario;
  categoria: Categoria = new Categoria;


  //variaveis do modo noturno
  modoNoturno: boolean = false;
  corBodyNoturno: string = '#0f0f0f'
  corFontesNoturno: string = '#ffffff'


  constructor(private produtoService: ProdutoService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    if (localStorage.getItem('idUsuario') == null) {
      location.assign('/login')
    }
    this.usuario.id = parseInt(localStorage.getItem("idUsuario"));

    if (localStorage.getItem('noturno') == 'true') {
      this.modoNoturno = true;
    }
  }

  modoNoturnoFunction() {
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }
  cadastrarProduto() {
    //Capturando a Categoria pelo html (value)
    this.categoria.codigoCategoria = parseInt((<HTMLSelectElement>document.getElementById('categoria')).value);
    console.log(this.categoria.codigoCategoria);
    this.produto.idCategoria = this.categoria;

    //Capturando usuario Ativo pelo localStorage
    this.usuario.id = parseInt(localStorage.getItem('idUsuario'));
    this.produto.idUsuario = this.usuario;

    console.log(this.produto.idUsuario);

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      location.assign('/usuarios/meusprodutos');
    })
  }
}
