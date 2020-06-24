import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Model/usuario';
import { Categoria } from 'src/app/Model/Categoria';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  produto: Produto = new Produto;
  produtoNovo: Produto = new Produto;
  usuario: Usuario = new Usuario;
  categoria: Categoria = new Categoria;


  constructor(private produtoService: ProdutoService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('idUsuario')== null) {
      location.assign('/login')
    }
    let id = this.router.snapshot.params['codigo'];
    this.usuario.id = parseInt( localStorage.getItem('idUsuario'));

    this.buscarProduto(id);
  }

  buscarProduto(id) {
    this.produtoService.getProdutoEspecifico(id).subscribe((resp: Produto)=> {
      this.produto = resp;
    })
  }

  atualizarProduto() {
    //Capturando a Categoria pelo html (value)
    this.categoria.codigoCategoria = parseInt((<HTMLSelectElement>document.getElementById('categoria')).value);
    this.produtoNovo.idCategoria = this.categoria;
    let ativo = (<HTMLSelectElement>document.getElementById('ativo')).value;
    if(ativo == '1' || ativo == '2') {
      this.produtoNovo.ativo = true;
    } else {
      this.produtoNovo.ativo = false;
    }
    this.produtoNovo.codigo = this.produto.codigo;

    //Capturando usuario Ativo pelo localStorage
    this.produtoNovo.idUsuario = this.usuario;


    this.produtoService.putProduto(this.produtoNovo).subscribe((resp: Produto) => {
      this.produtoNovo = resp;
      location.assign('/usuarios/meusprodutos');
    })
  }

}
