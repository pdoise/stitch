import { Component } from '@angular/core';

import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  model = new Login('', '');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}