import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  //variaveis do modo noturno
  modoNoturno: boolean = false;
  corBodyNoturno: string = '#010101'
  corFontesNoturno: string = '#ffffff'

  corBodyNaoNoturno: string = '#ffffff'

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('noturno') == 'true') {
      this.modoNoturno = true;
    }
  }

  modoNoturnoFunction() {
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }
}
