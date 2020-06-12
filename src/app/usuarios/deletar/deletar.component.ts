import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Model/usuario';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  usuario: Usuario = new Usuario;

  //variavel deleção OK para mostrar que deu certo
  delOk: boolean = false;

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id'];
    this.findById(id);
  }

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    }, err => {
      console.log(`Erro: ${err.status}, nao conseguimos pegar o Id`)
    })
  }

  btnNao() {
    this.router.navigate(['/usuarios']);
  }

  btnSim() {
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(() => {
      this.delOk = true;
      this.router.navigate(['/usuarios']);
      localStorage.setItem("delOk", this.delOk.toString());

    })
  }


}




