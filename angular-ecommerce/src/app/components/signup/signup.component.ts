import {Component} from '@angular/core';
import {UserRegister} from "../../shared/models/UserRegister";
import {AuthService} from "../../shared/services/auth.service";
import {SnackBarService} from "../../shared/services/snack-bar.service";

/**
 * This defines the signup component.
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userRegister: UserRegister = {firstName: '', lastName: '', email: '', password: ''};
  firstNameIsValid: boolean = true;
  lastNameIsValid: boolean = true;
  emailIsValid: boolean = true;
  passwordIsValid: boolean = true;
  formSubmitted = false;

  emailErrorMessage = "Invalid email format!";

  constructor(private authService: AuthService, private snackBarService: SnackBarService) {
  }

  validateForm() {
    this.firstNameValidator();
    this.lastNameValidator();
    this.emailValidator();
    this.passwordValidator();
    this.formSubmitted = true;
  }

  emailValidator() {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/);
    this.emailIsValid = regexp.test(this.userRegister.email);
  }

  passwordValidator() {
    this.passwordIsValid = this.userRegister.password.length >= 6;
  }

  firstNameValidator() {
    this.firstNameIsValid = this.userRegister.firstName !== '';
  }

  lastNameValidator() {
    this.lastNameIsValid = this.userRegister.lastName !== '';
  }


  register() {
    if (!this.formSubmitted) {
      this.validateForm();
      this.formSubmitted = true;
    }
    if (this.emailIsValid && this.passwordIsValid && this.firstNameIsValid && this.lastNameIsValid) {

      this.authService.register(this.userRegister).subscribe((response) => {
        this.snackBarService.openSnackBar("Successfully registered!")
      }, error => {
        this.emailIsValid = false;
        this.emailErrorMessage = error.error.message;
      });

    }
  }
}
