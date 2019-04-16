import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginAuth: Boolean = false;

  mostrarMenuEmitter = new EventEmitter<Boolean>();

  constructor(private router: Router) { }

  fazerLogin(login: Login) {

    if (login.email === 'teste' && login.password === '1234') {
      this.loginAuth = true;
      //this.mostrarMenuEmitter.emit(true);
      //this.router.navigate(['/']);
    }

    //this.loginAuth = false;
    //this.mostrarMenuEmitter.emit(true);
  }
}
