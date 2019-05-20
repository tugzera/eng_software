import { Component } from '@angular/core';

import { AuthService } from './pages/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  mostrarMenu: boolean = false;

  mostrarMenuUser: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.mostrarMenu.subscribe(mostrar => this.mostrarMenu = mostrar);
    this.authService.mostrarMenuUser.subscribe(mostrar => this.mostrarMenuUser = mostrar);
  }

}
