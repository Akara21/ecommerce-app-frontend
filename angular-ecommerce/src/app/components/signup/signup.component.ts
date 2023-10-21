import {Component} from '@angular/core';
import {UserRegister} from "../../shared/models/UserRegister";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userRegister: UserRegister = {firstName: '', lastName: '', email: '', password: ''};

  constructor(private authService: AuthService) {
  }

  register() {
    this.authService.register(this.userRegister);
  }
}
