import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0);

  }
  logar() {

    this.usuarioService.postLogar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;

      localStorage.setItem("token", resp.token);
      localStorage.setItem("nomeUsuario", resp.nome)
      localStorage.setItem("logado", "true")
      localStorage.setItem("idUsuario", resp.id.toString())
      alert("Logado com sucesso !")
      this.router.navigate(['/home']);
      let navbar = new NavbarComponent(this.router);
      navbar.verificarNavBar();
      setTimeout(() => {
        location.reload(true), 2000
      })

    }, (err) => {
      alert("Usuário ou senha inválidos")
    })

  }

}
