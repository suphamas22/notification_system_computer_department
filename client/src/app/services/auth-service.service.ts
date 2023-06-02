import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { loginInterface } from '../types/user.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<loginInterface> {
    const loginUrl = `${this.apiUrl}/user/login`; // Replace with your API endpoint for login

    // Create the login request payload
    const loginData = {
      username: username,
      password: password
    };
    // console.log(loginUrl)
    // Make the HTTP POST request to the login endpoint
    return this.http.post<loginInterface>(loginUrl, loginData);
  }
}
