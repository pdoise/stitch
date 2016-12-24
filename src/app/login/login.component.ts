import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  header:string = 'User Log In';

  ngOnInit() {
    console.log('Login Page');
  }

}