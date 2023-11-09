import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {SnackBarService} from "./snack-bar.service";
import {UserRegister} from "../models/UserRegister";
import {ShoppingCartService} from "./shopping-cart.service";
import {environment} from "../../../environments/environment.prod";
import {UserLogin} from "../models/UserLogin";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private baseUrl: string = environment.apiUrl + "/auth"

  private user: string | null = null;
  private token: string | null = null;
  private returnUrl = '/';

  constructor(private router: Router,
              private http: HttpClient,
              private snackBarService: SnackBarService,
              private shoppingCartService: ShoppingCartService) {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      this.user = JSON.parse(storedUser);
      this.token = JSON.parse(storedToken);
      this.isAuthenticated = true;
    }
  }

  login(userLogin: UserLogin): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.baseUrl + "/login", userLogin, {
      headers,
      responseType: 'text'
    });
  }

  handleLogin(user: UserLogin, token: string) {
    this.user = user.email!;
    this.token = token;
    this.isAuthenticated = true;
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('token', JSON.stringify(token));
    this.shoppingCartService.loadCart();
  }


  register(userRegister: UserRegister) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.baseUrl + "/register", userRegister, {
      headers,
    })

  }


  logout() {
    this.isAuthenticated = false;
    this.user = null;
    this.token = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }

  getUser() {
    return this.user;
  }


}
