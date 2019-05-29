import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../pages/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean> | boolean {
    if(this.authService.loginAuth())
    {
      //console.log('aqui');
      return true;
    }
    else if (this.authService.loginAuthUser())
    {
      //console.log('aq');
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      //console.log('aqui1');
      return false;
    }

  }
}
