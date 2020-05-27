import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Model/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario = new Usuario;

  constructor(private http: HttpClient) { }

  //Listar todos os usuarios
  getAllUsuarios() {
    return this.http.get('http://93.188.161.223:9000/user');
  }


  //Listar usuario pelo ID
  getByIdUsuario(id: number) {
    return this.http.get(`http://93.188.161.223:9000/user/${id}`)
  }


  //Cadastrar usuarios
  postCadastro(usuario: Usuario) {
    return this.http.post('http://93.188.161.223:9000/user', usuario);
  }

  //Deletar Usuarios
  deleteUsuario(id: number) {
    return this.http.delete(`http://93.188.161.223:9000/user/${id}`);
  }

  //Atualizar Usuarios
  putUsuario(usuario: Usuario) {
    return this.http.put('http://93.188.161.223:9000/user', usuario)
  }



}
