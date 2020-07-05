import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  //variaveis do modo noturno
  modoNoturno: boolean = false;
  corBodyNoturno: string = '#0f0f0f'
  corFontesNoturno: string = '#ffffff'

  corBodyNaoNoturno: string = '#ffffff'

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);

    if (localStorage.getItem('noturno') == 'true') {
      this.modoNoturno = true;
    }
  }

  modoNoturnoFunction() {
    this.modoNoturno = !this.modoNoturno;
    localStorage.setItem('noturno', this.modoNoturno.toString());
  }

}
