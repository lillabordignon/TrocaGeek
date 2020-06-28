import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  //variaveis do modo noturno
  modoNoturno: boolean = false;
  corBodyNoturno: string = '#010101'
  corFontesNoturno: string = '#ffffff'

  corBodyNaoNoturno: string = '#ffff'

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
