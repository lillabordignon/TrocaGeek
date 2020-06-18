import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { FAQComponent } from './faq/faq.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DeletarComponent } from './usuarios/deletar/deletar.component';
import { EditarComponent } from './usuarios/editar/editar.component';

import { DetalharComponent } from './produtos/detalhar/detalhar.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JogosComponent } from './categorias/jogos/jogos.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { ActionfigureComponent } from './categorias/actionfigure/actionfigure.component';
import { CardgameComponent } from './categorias/cardgame/cardgame.component';
import { AcessoriosComponent } from './categorias/acessorios/acessorios.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'termos-de-uso', component: TermosDeUsoComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/deletar/:id', component: DeletarComponent },
  { path: 'usuarios/editar/:id', component: EditarComponent },
  { path: 'produtos/jogos', component: JogosComponent },
  { path: 'produtos/consoles', component: ConsolesComponent },
  { path: 'produtos/actionfigures', component: ActionfigureComponent },
  { path: 'produtos/cardgame', component: CardgameComponent },
  { path: 'produtos/acessorios', component: AcessoriosComponent },
  { path: 'produtos/detalhar/:codigo', component: DetalharComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
