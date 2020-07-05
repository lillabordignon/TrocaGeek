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

  //variaveis modo noturno
  modoNoturno: boolean;
  corBodyNoturno: string = '#0f0f0f'
  corFonteNoturno: string = '#ffffff'

  constructor(private usuarioService: UsuarioService, private route: Router) { }


  ngOnInit() {
    window.scroll(0, 0);


    this.idUsuario = parseInt(localStorage.getItem('idUsuario'));
    if (localStorage.getItem('idUsuario') == null) {
      location.assign('/login')
    } else {
      this.usuarioService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
      })
    }

    if (localStorage.getItem('noturno') == 'true') {
      this.modoNoturno = true;
    }

  }

  deletarConta() {
    if (window.confirm("Deseja mesmo deletar sua conta ? essa ação não pode ser revertida !")) {
      this.usuarioService.deleteUsuario(this.idUsuario).subscribe(() => { })
      localStorage.clear();
      location.reload(true);
      this.route.navigate(["/login"]);
    }

  }

  modoNoturnoFunction() {
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }




}
