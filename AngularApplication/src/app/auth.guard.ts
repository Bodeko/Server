import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/Authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loggedIn: any
  constructor(private auth: AuthenticationService, private route: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.loggedIn = this.auth.isLoggedIn();
    if (this.loggedIn) {
      return true;
    }
    this.route.navigate(['/signin']);
    return false;
  }
}
