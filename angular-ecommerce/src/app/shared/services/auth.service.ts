import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = true
  ;

  constructor() {
  }

  login() {
  }

  logout() {
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
