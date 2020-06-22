import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../Model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: Usuario;

  idUsuario: number;

  constructor(private usuarioService: UsuarioService, private route: Router) { }


  ngOnInit() {
    this.idUsuario = parseInt(localStorage.getItem('idUsuario'));
    if(this.idUsuario == null) {
      this.route.navigate(["/login"]);
    } else {
      this.usuarioService.getByIdUsuario(this.idUsuario).subscribe((resp:Usuario)=> {
        this.usuario = resp;
      })
    }
  }




}
