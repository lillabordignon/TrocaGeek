import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Model/usuario'
import { UsuarioEditar } from '../Model/UsuarioEditar';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario = new Usuario;

  urlApi: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  //Listar todos os usuarios
  getAllUsuarios() {
    return this.http.get(this.urlApi + '/user');
  }


  //Listar usuario pelo ID
  getByIdUsuario(id: number) {
    return this.http.get(this.urlApi + `/usuario/${id}`, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }


  //Cadastrar usuarios
  postCadastro(usuario: Usuario) {
    return this.http.post(this.urlApi + '/usuario/cadastrar', usuario);
  }

  postLogar(usuario: Usuario) {
    return this.http.post(this.urlApi + '/usuario/logar', usuario);
  }

  //Deletar Usuarios
  deleteUsuario(id: number) {
    return this.http.delete(this.urlApi + `/user/${id}`);
  }

  //Atualizar Usuarios
  putUsuario(usuario: UsuarioEditar, id: number) {
    return this.http.put(this.urlApi + `/usuario/${id}`, usuario, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }



}
