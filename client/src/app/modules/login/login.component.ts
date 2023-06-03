import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth-service.service"
import { loginInterface } from 'src/app/types/user.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent {


  public username: string;
  public password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
    ) {
    this.username = '';
    this.password = '';

  }

  login() {
    this.authService.login(
      this.username, this.password
    ).subscribe({
      next(resp: loginInterface) {
        localStorage.setItem('token', resp.token);
        // this.ngZone.run(() => this.router.navigateByUrl('/dairy')); 
      }
    })
  }
}
