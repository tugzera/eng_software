import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Login } from './login.model';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginAutenticado: boolean = false;

  constructor(private router: Router) { }

  mostrarMenu = new EventEmitter<boolean>(); 

  fazerLogin(login: Login)
  {
    if (login.email === 'teste@teste.com' && login.password === 'teste')
    {
      this.loginAutenticado = true;

      this.mostrarMenu.emit(true);

      this.router.navigate(['/admin']);
    } 
    else
    {
      this.loginAutenticado = false;
      this.mostrarMenu.emit(false);
    }
  }

  loginAuth() {
    return this.loginAutenticado;
  }

}
