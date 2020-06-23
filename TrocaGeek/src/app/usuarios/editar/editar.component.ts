import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioEditar } from 'src/app/Model/UsuarioEditar';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  usuario: Usuario = new Usuario;
  usuarioEditar: UsuarioEditar = new UsuarioEditar;
  idUsuario:number;
  verificarSenha: string;

  alerta:boolean = false;

  ngOnInit() {
    this.idUsuario = this.route.snapshot.params['id'];
    this.findUsuario(this.idUsuario);
  }
  findUsuario (id:number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario)=> {
      this.usuario = resp;
    })
  }
  verificarSenhasCoincidem() {
    if(this.usuarioEditar.senha == this.verificarSenha){
     this.alterarDados(this.usuarioEditar, this.idUsuario);
    } else {
      this.alerta = true;
      setTimeout(() => { this.alerta = false }, 5000)
    }
  }
  alterarDados(usuarioNovo:UsuarioEditar, id:number){
    this.usuarioService.putUsuario(usuarioNovo, id).subscribe((resp:UsuarioEditar)=> {
      this.usuarioEditar = resp;
      alert("Dados alterados, você será redirecionado a tela de login")
    }, err => {
      alert(err.error)
    })

    this.deslogar();
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
}
