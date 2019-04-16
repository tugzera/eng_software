import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { TesteComponent } from './teste/teste.component';
import { TopPageComponent } from './top-page/top-page.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { TopPageClienteComponent } from './top-page-cliente/top-page-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    FooterBarComponent,
    TesteComponent,
    TopPageComponent,
    NavBarAdminComponent,
    ClientFormComponent,
    TopPageClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
