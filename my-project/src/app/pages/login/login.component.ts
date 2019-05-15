import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Login } from './login.model';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: Login = new Login();

  private admin: Login[];

  private loginAutenticado: boolean = false;

  mostrarMenu = new EventEmitter<boolean>();


  constructor(
    private service: LoginServiceService,
    //private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  fazerLogin() {
    let teste: Login = new Login(); //teste retorna o objeto com os dados

    this.service.getLogin(this.login).subscribe(u => {
      teste = u;
      console.log('Aq:' , u); 
      this.authService.fazerLogin(teste);
    })
    
  }

  loginAuth() {
    return this.loginAutenticado.valueOf;
  }
  /*compareLogin() {
    //console.log("aqui")
     this.service.getLogin().subscribe((a) => a.forEach((l,i,a) =>{
      console.log( l.email);
      console.log(l.password);
      console.log(l.status);
     }))
    this.service.getLogin().subscribe((a) => this.admin = a)
    console.log(1);
  }
  */



}
