import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  private login: Login = new Login();

  ngOnInit() {
  }

  fazerLogin() {
    //console.log(this.login);
    this.authService.fazerLogin(this.login);
  }

}
