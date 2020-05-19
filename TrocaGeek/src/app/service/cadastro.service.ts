import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastrar } from '../Model/cadastrar';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }


postCadastro(cadastro : Cadastrar){
  return this.http.post('http://93.188.161.223:9000/user', cadastro)
}

}
