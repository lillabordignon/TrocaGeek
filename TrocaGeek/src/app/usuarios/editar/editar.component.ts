import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioEditar } from 'src/app/Model/UsuarioEditar';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  usuario: Usuario = new Usuario;
  usuarioEditar: UsuarioEditar = new UsuarioEditar;
  idUsuario: number;
  verificarSenha: string;

  alerta: boolean = false;
  alertaConcluido: boolean = false;

  //variaveis modo noturno
  modoNoturno: boolean;
  corBodyNoturno: string = '#0f0f0f'
  corFonteNoturno: string = '#ffffff'

  //dados usuario 

  ngOnInit() {

    window.scroll(0, 0);

    this.idUsuario = this.route.snapshot.params['id'];
    this.findUsuario(this.idUsuario);
    if (localStorage.getItem('idUsuario') == null) {
      this.router.navigate(["/login"]);
    }
    if (localStorage.getItem('noturno') == 'true') {
      this.modoNoturno = true;
    }
  }
  findUsuario(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }


  modoNoturnoFunction() {
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }

  alterarDados() {
    this.usuarioService.putUsuario(this.usuarioEditar, this.idUsuario).subscribe((resp: UsuarioEditar) => {
      this.usuarioEditar = resp;
      this.alertaConcluido = true;

      setTimeout(() => {
        this.alertaConcluido = false;
      }, 3000)
    }, err => {
      alert(err.error)
    })
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['/usuario']);
  }

}
