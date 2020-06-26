import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  deslogado: boolean = true;
  logado: boolean = false;
   

  idUsuario: number;
  nomeUsuario: string;

  barraPesquisa: string;

  verificar: string

  constructor(private router: Router) { }

  ngOnInit() {
    this.verificarNavBar();
  }

  public verificarNavBar() {
    this.verificar = localStorage.getItem("logado");
    if (this.verificar == "true") {
      this.nomeUsuario = localStorage.getItem("nomeUsuario");
      this.idUsuario = parseInt(localStorage.getItem("idUsuario"));
      this.deslogado = false;
      this.logado = true;
    } else {
      this.deslogado = true;
      this.logado = false;
    }

  }
  deslogar() {
    localStorage.clear();
    location.reload(true);
  }

}
