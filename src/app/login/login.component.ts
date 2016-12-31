import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { AuthenticationService } from '../auth/authentication.service';
import { PvdmMessagesService } from '../pvdm-lib/components/pvdm-messages/pvdm-messages.service';
import { PvdmMessage } from '../pvdm-lib/components/pvdm-messages/pvdm-messages.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  user: any = {};
  loading = false;
  msg: any;

  loginForm : FormGroup;

  constructor(
    private __router: Router,
    private __authenticationService: AuthenticationService,
    private __messages: PvdmMessagesService,
    private __fb: FormBuilder) {
      this.loginForm = __fb.group({
        'email' : [null, Validators.required],
        'password': [null, Validators.required]
      }) 
  }
 
  ngOnInit() {
    // reset login status
    this.__authenticationService.logout();
  }
 
  login() {
    this.loading = true;
    this.__authenticationService
      .login(this.user)
      .subscribe(
        result => {
          this.__router.navigate(['/']);
        },
        error => {
          this.__messages.add(new PvdmMessage("danger", "We're sorry, your User ID or Password was incorrect."));
          this.loading = false;
        }
      );
  }
}