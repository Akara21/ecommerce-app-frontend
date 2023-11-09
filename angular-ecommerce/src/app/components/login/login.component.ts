import {Component} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {UserLogin} from "../../shared/models/UserLogin";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: UserLogin = {email: '', password: ''};
  returnUrl = '/';
  inputIsValid = true;
  emailIsValid: boolean = true;
  passwordIsValid: boolean = true;
  formSubmitted = false;
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    if (!this.formSubmitted) {
      this.validateForm();
      this.formSubmitted = true;
    }
    if (this.emailIsValid && this.passwordIsValid) {
      this.authService.login(this.user).subscribe(token => {
        this.authService.handleLogin(this.user, token);
        this.router.navigate([this.returnUrl]);
      }, error => {
        this.inputIsValid = false;
        this.errorMessage = error.error;
      })

    }
  }

  validateForm() {
    this.emailValidator();
    this.passwordValidator();
  }

  emailValidator() {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/);
    this.emailIsValid = regexp.test(this.user.email!);
  }

  passwordValidator() {
    this.passwordIsValid = this.user.password!.length >= 6;
  }

}
