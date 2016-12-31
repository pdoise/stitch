import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private __router: Router) { }
 
  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
 
    // not logged in so redirect to login page
    this.__router.navigate(['/login']);
    return false;
  }
}