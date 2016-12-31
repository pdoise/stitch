import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
  public token: string;
 
  constructor(private __http: Http) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }
 
  login(credentials): Observable<boolean> {
    return this.__http.post('http://localhost:4001/login', credentials )
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().jwt;
        if (token) {
          // set token property
          this.token = token;
 
          // store email and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: credentials.email, token: token }));
 
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }
 
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}