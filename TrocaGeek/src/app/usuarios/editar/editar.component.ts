import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  usuario: Usuario = new Usuario;
  senhaAtual: string;
  senhaErrada: boolean = false;
  alerta: boolean = false;
  confirmarSenha: string;
  novaSenha: string;
  novaConfirmaSenha: string;

  // Campos que retornam para alteração
  nome: string;
  email: string;
  telefone: string;
  emailusuario: string;


  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.findByid(id);
  }

  findByid(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  verificar() {

    this.nome = (<HTMLInputElement>document.getElementById("name")).value;
    this.email = (<HTMLInputElement>document.getElementById("email")).value;
    this.telefone = (<HTMLInputElement>document.getElementById("tel")).value;

    this.senhaAtual = (<HTMLInputElement>document.getElementById("senhaAtual")).value;
    this.novaSenha = (<HTMLInputElement>document.getElementById("novaSenha")).value;
    this.novaConfirmaSenha = (<HTMLInputElement>document.getElementById("confirmarNovaSenha")).value;
    this.emailusuario = this.usuario.email;


    // Faz as alterações
    this.alterarNome();
    this.alterarEmail();
    this.alterarTelefone();
    this.alterarSenha();

    // Salva as Alterações
    this.salvar();

  }


  alterarNome() {
    if (this.nome != "") {

      this.usuario.nome = this.nome

    } else {
      return this.usuario.nome;
    }

  }

  alterarEmail() {
    if (this.email != "") {
      this.usuario.email = this.email
    } else {
      return this.usuario.email
    }

  }

  alterarTelefone() {
    if (this.telefone != "") {
      this.usuario.telefone = this.telefone
    } else {
      return this.usuario.telefone
    }
  }

  alterarSenha() {

    if ((this.novaSenha === this.novaConfirmaSenha) && (this.senhaAtual === this.usuario.senha)) {
      this.usuario.senha = this.novaSenha
    } else {
      return this.usuario.senha;
    }
  }

  salvar() {

    if ((this.usuario.senha === this.senhaAtual) || (this.novaSenha === "")) {
      this.alerta = false;



      this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/usuarios/editar/:id'])
        console.log(this.usuario);

        if ((this.usuario.email != this.emailusuario)) {
          setTimeout(() => { alert("Cadastro Alterado, você será redirecionado"); this.router.navigate(['/login']) }, 500)
        } else {
          setTimeout(() => {
            alert("Cadastro Alterado, você será redirecionado");
            localStorage.clear();
            location.reload(true);
            this.router.navigate(['/usuarios'])
          }, 500)
        }
      })


    } else {
      this.alerta = true;
      setTimeout(() => { this.alerta = false }, 5000)
    }

  }

}
