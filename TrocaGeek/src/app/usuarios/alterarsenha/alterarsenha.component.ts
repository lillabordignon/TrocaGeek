import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioAlterarSenha } from 'src/app/Model/UsuarioAlterarSenha';

@Component({
  selector: 'app-alterarsenha',
  templateUrl: './alterarsenha.component.html',
  styleUrls: ['./alterarsenha.component.css']
})
export class AlterarsenhaComponent implements OnInit {
    //variaveis modo noturno
    modoNoturno:boolean ;
    corBodyNoturno: string = '#010101'
    corFonteNoturno: string = '#ffffff'

    alerta: boolean = false;
    alertaSenha: boolean = false;

    //variaveis usuario
    usuario:Usuario = new Usuario
    usuarioSenhaNova: UsuarioAlterarSenha = new UsuarioAlterarSenha
    idUsuario: number; 


  constructor(private usuarioService: UsuarioService, private route:ActivatedRoute, private router:Router) { }

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

  verificar() {
   
    if (this.usuarioSenhaNova.senhaNova == this.usuarioSenhaNova.confirmaSenha) {
      this.AlterarSenha(this.usuarioSenhaNova, this.idUsuario)
     } else {
      this.alerta = true;
       setTimeout(() => { this.alerta = false }, 5000)
     }

  }

  modoNoturnoFunction(){
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }
   
  AlterarSenha(usuarioNovo: UsuarioAlterarSenha, id: number) {
    this.usuarioService.putUsuarioSenha(usuarioNovo, id).subscribe((resp: Usuario) => {
      this.alertaSenha = true;
      localStorage.setItem('token', resp.token)

      setTimeout(() => {
        this.alertaSenha = false;
      }, 4000);
    }, err => {
      alert(err.error)
    })
  }
}
