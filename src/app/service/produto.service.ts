import { Injectable } from '@angular/core';
import { Produto } from '../Model/Produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produto : Produto = new Produto;

  constructor(private http: HttpClient) { }


  getAllProdutos () {
    return this.http.get('https://api-produtos-genera.herokuapp.com/produtos')
  }


}
