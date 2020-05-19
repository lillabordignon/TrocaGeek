import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/service/cadastro.service'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastro : CadastroService

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.cadastro.postCadastro(this.cadastro).subscribe((resp: CadastroService) =>{

      
    })

  }

}
