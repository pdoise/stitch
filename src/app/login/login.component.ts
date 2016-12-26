import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  user: any = {};
  loading = false;
  error = '';

  loginForm : FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder) {
      this.loginForm = fb.group({
        'email' : [null, Validators.required],
        'password': [null, Validators.required]
      }) 
  }
 
  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }
 
  login() {
    this.loading = true;
    this.authenticationService
      .login(this.user)
      .subscribe(
        result => {
          this.router.navigate(['/']);
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }
}