import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginAutenticado: boolean = false;

  private loginAutenticadoUser : boolean = false;

  mostrarMenu = new EventEmitter<boolean>();

  mostrarMenuUser = new EventEmitter<boolean>();

  constructor(
    private router: Router,
  ) { }

  fazerLogin(login: Login) {
    if (login != null) {
      if (login.status === 'admin')
      {
        this.loginAutenticado = true;
        this.mostrarMenu.emit(true)
        this.router.navigate(['/admin']);
      }
      if ( login.status === 'user')
      {
        //console.log('user');
        this.loginAutenticadoUser = true;
        this.mostrarMenuUser.emit(true);
        this.router.navigate(['/user']);
      }
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

  loginAuthUser () {
    return this.loginAutenticadoUser;
  }

}
