import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../Model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaUsuarios: Usuario[];
  usuario: Usuario = new Usuario;
  alerta: boolean = false;

  constructor(private usuarioService: UsuarioService) { }


  ngOnInit(): void {
    this.findAllUsuarios();
    window.scroll(0, 0);

    //Controlando dinamicamente a aparição do Alerta de deletado com sucesso
    let item: string = localStorage.getItem('delOk');
    if (item == "true") {
      this.alerta = true;
      //limpa o localStorage
      localStorage.clear();

      //Delay para visualização do alerta
      setTimeout(() => {
        location.assign('/usuarios')
      }, 4000)




    }
  }


  findAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp;
    })
  }


}
