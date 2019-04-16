import { AuthService } from './login-page/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  mostrarMenu: Boolean = false;

  constructor (private AuthService: AuthService) {

  }

  ngOnInit () {
    this.AuthService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
