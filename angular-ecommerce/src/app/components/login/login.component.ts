import {Component} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {UserLogin} from "../../shared/models/UserLogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: UserLogin = {email: '', password: ''};

  constructor(private authService: AuthService) {
  }

  login() {
    if (this.user.email && this.user.password) {
      this.authService.login(this.user);
    }

  }

}
