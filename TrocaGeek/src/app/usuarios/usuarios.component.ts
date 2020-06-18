import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../Model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  nomeUsuario: string;

  constructor(private usuarioService: UsuarioService) { }


  ngOnInit(): void {
    this.nomeUsuario = localStorage.getItem("nomeUsuario");
  
  }



}
