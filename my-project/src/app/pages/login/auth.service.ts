import { LoginServiceService } from './login-service.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private login: Login = new Login();

  private admin: Login[];

  private loginAutenticado: boolean = false;

  mostrarMenu = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private service: LoginServiceService
  ) { }

  fazerLogin(login: Login) {
    if (login != null) {
      //console.log('verdade');
      this.loginAutenticado = true;
      this.mostrarMenu.emit(true)
      this.router.navigate(['/admin']);
    }
    else {
      //console.log('false');
      this.loginAutenticado = false;
      this.mostrarMenu.emit(false);
      this.router.navigate(['/login']);
    }

  }


  loginAuth() {
    return this.loginAutenticado;
  }


}
