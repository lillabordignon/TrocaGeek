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
  nome: string;
  email: string;
  cpf: string
  telefone: string;

  constructor(private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    window.scroll(0, 0);

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

  verificar() {
    this.nome = (<HTMLInputElement>document.getElementById("nome")).value;
    this.email = (<HTMLInputElement>document.getElementById("email")).value;
    this.telefone = (<HTMLInputElement>document.getElementById("tel")).value;
    this.cpf = (<HTMLInputElement>document.getElementById("cpf")).value;

    this.nome.trim();
    this.email.trim()

    if (this.nome.length < 3 || this.nome == null) {
      return alert("Digite um nome válido")
    }
    else if (!this.testaCPF(this.cpf)) {
      return alert("Digite um Cpf válido !")
    } else {
      this.cadastro();
    }


  }

  testaCPF(cpf) {
    var Soma;
    var Resto;
    Soma = 0;
    if (cpf == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

}
