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
import { JogosComponent } from './jogos/jogos.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { CardgameComponent } from './cardgame/cardgame.component';
import { ActionfigureComponent } from './actionfigure/actionfigure.component';
import { AcessorioComponent } from './acessorio/acessorio.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'termos-de-uso', component: TermosDeUsoComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/deletar/:id', component: DeletarComponent },
  { path: 'usuarios/editar/:id', component: EditarComponent },
  {path: 'produtos/jogos', component: JogosComponent},
  {path: 'produtos/consoles', component: ConsolesComponent},
  {path: 'produtos/actionfigures', component: ActionfigureComponent},
  {path: 'produtos/cardgame', component: CardgameComponent},
  {path: 'produtos/acessorios',component: AcessorioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
