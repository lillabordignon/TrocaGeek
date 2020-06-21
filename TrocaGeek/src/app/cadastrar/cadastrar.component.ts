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
  nome:string;
  email:string;
  cpf:string
  telefone:string;

  constructor(private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastro() {

    if (this.usuario.senha === this.usuario.confirmarSenha) {
      this.alerta = false;
      this.UsuarioService.postCadastro(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert("Cadastrado com sucesso !")
        this.router.navigate(['/login']);
      }, (err) => {
        alert("Erro, email já existente !")
      })
    } else {
      this.alerta = true;
      setTimeout(() => { this.alerta = false }, 5000)
    }

  }

  verificar () {
    this.nome = (<HTMLInputElement>document.getElementById("nome")).value;
    this.email = (<HTMLInputElement>document.getElementById("email")).value;
    this.telefone = (<HTMLInputElement>document.getElementById("tel")).value;

    this.nome.trim();
    this.email.trim()

    if(this.nome.length < 3 || this.nome == null) {
      return  alert("Digite um nome válido")
    } 
    else if (!this.email.endsWith(".com") || !this.email.endsWith(".net") || !this.email.endsWith(".br")
     && !this.email.includes("@") ) {
        return alert("Digite um EMAIL válido !")
               }
    
      this.cadastro();
  }

}
