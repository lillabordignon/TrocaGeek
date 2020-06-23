import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Negociacao } from '../Model/Negociacao';

@Injectable({
  providedIn: 'root'
})
export class NegociacaoService {

  constructor(private http: HttpClient) { }



  getNegociacaoByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/minhasnegociacoes/${id}`, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }

  getNegociacaoById(id: number) {
    return this.http.get(`http://localhost:8080/negociacao/${id}`, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }

  getVendas(id: number) {
    return this.http.get(`http://localhost:8080/negociacao/vendas/${id}`, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }



  getCompras(id: number) {
    return this.http.get(`http://localhost:8080/negociacao/compras/${id}`, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }




  postNegociacao(negociacao: Negociacao) {
    return this.http.post('http://localhost:8080/negociacao', negociacao, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }

  putNegociacao(negociacao: Negociacao) {
    return this.http.put('http://localhost:8080/negociacao', negociacao, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }

}
