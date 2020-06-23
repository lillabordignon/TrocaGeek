import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../Model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }


  getAllProdutos(pagina: number, quantidade: number) {
    return this.http.get(`http://localhost:8080/produtos?page=${pagina}&size=${quantidade}`)
  }

  getProdutoEspecifico(codigo: number) {
    return this.http.get(`http://localhost:8080/produtos/${codigo}`)
  }

  getByNomeprodutos(nome: string, pagina: number, quantidade: number) {
    return this.http.get(`http://localhost:8080/produtos/nome/${nome}?page=${pagina}&size=${quantidade}`)
  }

  getByProdutosOrdenados(pagina: number, quantidade: string, ordenacao: string, ordem: string) {
    return this.http.get(`http://localhost:8080/produtos?page=${pagina}&size=${quantidade}&sort=${ordenacao},${ordem}`)
  }

  getByNomeprodutosOrdenados(nome: string, pagina: number, quantidade: number, ordenacao: string, ordem: string) {
    return this.http.get(`http://localhost:8080/produtos/nome/${nome}?page=${pagina}&size=${quantidade}&sort=${ordenacao},${ordem}`)
  }

  getProdutosByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/produtos/meusprodutos/${id}`, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }

  //cadastrar produtos
  postProduto(produto: Produto) {
    return this.http.post('http://localhost:8080/produtos', produto, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    });
  }

  deletarProduto(codigo) {
    return this.http.delete(`http://localhost:8080/produtos/${codigo}`, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    });
  }

}