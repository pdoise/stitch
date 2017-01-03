import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { PvdmMessagesService } from '../pvdm-lib/components/pvdm-messages/pvdm-messages.service';
import { PvdmMessage } from '../pvdm-lib/components/pvdm-messages/pvdm-messages.model';
 
@Injectable()
export class AuthenticationService {
  public token: string;
  public authenticated: boolean;
 
  constructor(
    private __http: Http,
    private __messages: PvdmMessagesService) {
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
          this.authenticated = true;
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
    this.authenticated = false;
    localStorage.removeItem('currentUser');
    this.__messages.nextRoute(new PvdmMessage("success", "You have logged out successfully."));
  }
}