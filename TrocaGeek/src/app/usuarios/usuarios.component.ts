import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../Model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaUsuarios: Usuario[];
  usuario: Usuario = new Usuario;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.findAllUsuarios();
    window.scroll(0, 0);
  }


  findAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp;
    })
  }


}
