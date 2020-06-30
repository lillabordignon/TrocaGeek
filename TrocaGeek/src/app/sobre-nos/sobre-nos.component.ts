import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faGithubAlt = faGithubAlt

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
