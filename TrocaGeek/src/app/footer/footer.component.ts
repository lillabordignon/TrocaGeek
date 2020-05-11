import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faGithubAlt = faGithubAlt

  constructor() { }

  ngOnInit(): void {
  }

}
