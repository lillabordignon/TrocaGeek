import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faGithubAlt = faGithubAlt

  constructor() { }

  ngOnInit(): void {
  }

}
