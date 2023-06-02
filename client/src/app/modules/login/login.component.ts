import { Component } from '@angular/core';
import { AuthService } from "../../services/auth-service.service"
import { loginInterface } from 'src/app/types/user.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string;
  public password: string;

  constructor(
    private authService: AuthService
    
    ) {
    this.username = '';
    this.password = '';

  }

  login() {
    // Handle login logic here, such as making API calls, validating credentials, etc.
    // console.log('Username:', this.username);
    // console.log('Password:', this.password);
    this.authService.login(
      this.username, this.password
    ).subscribe({
      next(resp: loginInterface) {
        console.log(resp.token)
      }
    })
  }
}
