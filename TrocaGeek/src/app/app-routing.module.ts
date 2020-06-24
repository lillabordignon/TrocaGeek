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
import { EditarComponent } from './usuarios/editar/editar.component';
import { DetalharComponent } from './produtos/detalhar/detalhar.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JogosComponent } from './categorias/jogos/jogos.component';
import { ActionfigureComponent } from './categorias/actionfigure/actionfigure.component';
import { CardgameComponent } from './categorias/cardgame/cardgame.component';
import { AcessoriosComponent } from './categorias/acessorios/acessorios.component';
import { ConsoleComponent } from './categorias/console/console.component';
import { NegociacaoComponent } from './negociacao/negociacao.component';
import { MeusprodutosComponent } from './usuarios/meusprodutos/meusprodutos.component';
import { CadastrarProdutoComponent } from './produtos/cadastrar-produto/cadastrar-produto.component';
import { DetalhesComponent } from './negociacao/detalhes/detalhes.component';
import { MinhasnegociacoesComponent } from './negociacao/minhasnegociacoes/minhasnegociacoes.component';
import { EditarProdutosComponent } from './produtos/editar-produtos/editar-produtos.component';


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
  { path: 'usuarios/editar/:id', component: EditarComponent },
  { path: 'usuarios/meusprodutos', component: MeusprodutosComponent },
  { path: 'produtos/jogos', component: JogosComponent },
  { path: 'produtos/consoles', component: ConsoleComponent },
  { path: 'produtos/actionfigures', component: ActionfigureComponent },
  { path: 'produtos/cardgame', component: CardgameComponent },
  { path: 'produtos/acessorios', component: AcessoriosComponent },
  { path: 'produtos/detalhar/:codigo', component: DetalharComponent },
  { path: 'produtos/editar/:codigo', component: EditarProdutosComponent},
  // Apos clicar em negociar, antes de dar post na negociação / **codigo referente ao produto que sera negociado
  { path: 'negociacao/:codigo', component: NegociacaoComponent },
  { path: 'cadastrar-produto', component: CadastrarProdutoComponent },
  // detalhe da Negociação (apos clicar em negoicar) *id da negociação em andamento
  { path: 'negociacao-detalhe/:id', component: DetalhesComponent },

  { path: 'minhas-negociacoes', component: MinhasnegociacoesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
