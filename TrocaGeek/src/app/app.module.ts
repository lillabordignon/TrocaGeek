import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContatoComponent } from './contato/contato.component';
import { FAQComponent } from './faq/faq.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { DeletarComponent } from './usuarios/deletar/deletar.component';
import { EditarComponent } from './usuarios/editar/editar.component';
import { ActionfigureComponent } from './categorias/actionfigure/actionfigure.component';
import { CardgameComponent } from './categorias/cardgame/cardgame.component';
import { JogosComponent } from './categorias/jogos/jogos.component';
import { AcessoriosComponent } from './categorias/acessorios/acessorios.component';
import { ConsoleComponent } from './categorias/console/console.component';
import { DetalharComponent } from './produtos/detalhar/detalhar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    LoginComponent,
    CadastrarComponent,
    NavbarComponent,
    FooterComponent,
    SobreNosComponent,
    ContatoComponent,
    FAQComponent,
    TermosDeUsoComponent,
    UsuariosComponent,
    DeletarComponent,
    EditarComponent,
    ActionfigureComponent,
    CardgameComponent,
    JogosComponent,
    AcessoriosComponent,
    ConsoleComponent,
    DetalharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }