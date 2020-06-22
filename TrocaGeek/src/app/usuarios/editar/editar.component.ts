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
  nome: string;
  telefone: string;
  email: string;
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
    this.confirmarSenha = (<HTMLInputElement>document.getElementById("confirmarSenha")).value;
    this.novaSenha = (<HTMLInputElement>document.getElementById("novaSenha")).value;
    this.novaConfirmaSenha = (<HTMLInputElement>document.getElementById("novaConfirmaSenha")).value;
    this.emailusuario = this.usuario.email;

    this.salvar();

  }


  salvar() {

    if ((this.usuario.senha === this.confirmarSenha) || (this.novaSenha == null)) {
      this.alerta = false;

      if (this.nome != null) {

        this.usuario.nome = this.nome

      }

      else if (this.email != null) {
        this.usuario.email = this.email
      }

      else if (this.telefone != null) {
        this.usuario.telefone = this.telefone
      }

      else if ((this.novaSenha === this.novaConfirmaSenha) && (this.usuario.senha === this.senhaAtual)) {
        this.usuario.senha = this.novaSenha

      }


      this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/usuarios/editar/:id'])
        console.log(this.usuario);

        if (this.usuario.email != this.emailusuario) {
          setTimeout(() => { alert("Cadastro Alterado, você será redirecionado"); this.router.navigate(['/login']) }, 1000)
        } else {
          setTimeout(() => { alert("Cadastro Alterado, você será redirecionado"); this.router.navigate(['/usuario']) }, 1000)
        }
      })


    } else {
      this.alerta = true;
      setTimeout(() => { this.alerta = false }, 5000)
    }

  }

}
