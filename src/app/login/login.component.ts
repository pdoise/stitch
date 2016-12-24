import { Component } from '@angular/core';

import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  model = new Login('', '');

  login() {
    this.model = new Login('', '');
  }
}