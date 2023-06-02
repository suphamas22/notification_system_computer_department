import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const loginUrl = `${this.apiUrl}/login`; // Replace with your API endpoint for login

    // Create the login request payload
    const loginData = {
      username: username,
      password: password
    };

    // Make the HTTP POST request to the login endpoint
    return this.http.post(loginUrl, loginData);
  }
}
