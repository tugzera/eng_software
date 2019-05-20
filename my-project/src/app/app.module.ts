import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminNavbarComponent } from './pages/admin-navbar/admin-navbar.component';
import { AuthService } from './pages/login/auth.service';
import { routing } from './app.routing';
import { HomeComponent } from './pages/admin/home/home.component';
import { AuthGuardService } from './guards/auth.guard.service';
import { HomeUserComponent } from './pages/user/home-user/home-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    AdminNavbarComponent,
    HomeComponent,
    HomeUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
