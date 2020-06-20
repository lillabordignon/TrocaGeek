import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Model/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service'


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario;
  senhaErrada: boolean = false;
  alerta: boolean = false;

  constructor(private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastro() {

    if (this.usuario.senha === this.usuario.confirmarSenha) {
      this.alerta = false;
      this.UsuarioService.postCadastro(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert("Usuario cadastrado com sucesso !")
        this.router.navigate(['/login']);
      })
    } else {
      this.alerta = true;
      setTimeout(() => { this.alerta = false }, 5000)
    }

  }

}
