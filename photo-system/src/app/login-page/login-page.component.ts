import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
//import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  login: Login[];
  //constructor(
  //  private service: LoginPageService
  //) { }
  //private login: Login = new Login();



  ngOnInit() {

  }

  /*compareLogin() {
    console.log("aqui")
     this.service.getLogin().subscribe((a) => a.forEach((l,i,a) =>{
      console.log( l.email)
     }))
    this.service.getLogin().subscribe((a) => this.login = a)
  }
  
  teste: Login

  imprimir() {

    this.login.forEach((a, b, c) => {
      console.log(a)
    })
  }
  */
  
  
}
