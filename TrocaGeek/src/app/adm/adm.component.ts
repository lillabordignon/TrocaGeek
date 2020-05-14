import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Usuario } from 'src/model/Usuario';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  listaUsers: Usuario []

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
   this.getAllUsers();
  }

  getAllUsers() {
    this.usuarioService.getAllUsers().subscribe((resp: Usuario [] )=> {
      this.listaUsers = resp;
    })
  }

  

}
