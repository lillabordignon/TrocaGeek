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

   //variaveis modo noturno
   modoNoturno:boolean ;
   corBodyNoturno: string = '#010101'
   corFonteNoturno: string = '#ffffff'

  //dados usuario 

  ngOnInit() {
    this.idUsuario = this.route.snapshot.params['id'];
    this.findUsuario(this.idUsuario);
    if(localStorage.getItem('idUsuario') == null) {
      this.router.navigate(["/login"]);
    }
    if(localStorage.getItem('noturno') == 'true') {
      this.modoNoturno = true;
    }
  }
  findUsuario(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  alterarNome() {

    if (this.usuarioEditar.nome == null) {
      return this.usuarioEditar.nome = this.usuario.nome
    } return this.usuarioEditar.nome
  }

  alterarEmail() {
    if (this.usuarioEditar.email == null) {
      return this.usuarioEditar.email = this.usuario.email
    } return this.usuarioEditar.email
  }

  alterarTelefone() {
    if (this.usuarioEditar.telefone == null) {
      return this.usuarioEditar.telefone = this.usuario.telefone
    } return this.usuarioEditar.telefone
  }

  alterarSenha() {


    if (this.usuarioEditar.senha == this.verificarSenha) {
      return this.usuarioEditar.senhaAntiga = this.usuarioEditar.senha

    } else {
      this.usuarioEditar.senha = this.usuarioEditar.senhaAntiga;
      this.verificarSenha = this.usuarioEditar.senhaAntiga;
    }
  }


  verificar() {

    // if (this.usuarioEditar.senhaAntiga == this.usuario.senha) {

    this.alterarNome();
    this.alterarEmail();
    this.alterarTelefone();
    this.alterarSenha();
    this.usuarioEditar.senhaAntiga = this.usuario.senha;
    this.alterarDados(this.usuarioEditar, this.idUsuario);

    // } else {
    //   this.alerta = true;
    //   setTimeout(() => { this.alerta = false }, 5000)
    // }


  }

  verificarSenhasCoincidem() {
    if (this.usuarioEditar.senha == this.verificarSenha) {

    }
  }

  modoNoturnoFunction(){
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }
   


  alterarDados(usuarioNovo: UsuarioEditar, id: number) {
    this.usuarioService.putUsuario(usuarioNovo, id).subscribe((resp: UsuarioEditar) => {
      this.usuarioEditar = resp;
      alert("Dados alterados, você será redirecionado a tela de login")
    }, err => {
      alert(err.error)
    })

    this.deslogar();
  }

  deslogar() {
    // localStorage.clear();
    this.router.navigate(['/usuario']);
  }

}
