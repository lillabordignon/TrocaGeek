import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/service/cadastro.service'
import { Cadastrar } from '../Model/cadastrar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastrar : Cadastrar = new Cadastrar

  constructor(private CadastroService : CadastroService , private router : Router) { }

  ngOnInit(): void {
  }


  cadastro(){

    if(this.cadastrar.senha === this.cadastrar.confirmarSenha){

    this.CadastroService.postCadastro(this.cadastrar).subscribe((resp: Cadastrar) =>{
      this.cadastrar = resp
      this.router.navigate(['/usuarios']) 
    })
  }else{
    console.log("Senha Errada")
  }

  }

}
