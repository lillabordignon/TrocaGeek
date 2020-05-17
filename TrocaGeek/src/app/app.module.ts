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
<<<<<<< HEAD
import { AdmComponent } from './adm/adm.component';
import { HttpClientModule } from '@angular/common/http'
=======
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http'

>>>>>>> aa80bee5d9f8776dd7731cae23423bbc2f1151ed

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
<<<<<<< HEAD
    AdmComponent
=======
    UsuariosComponent
>>>>>>> aa80bee5d9f8776dd7731cae23423bbc2f1151ed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
