import { Component } from '@angular/core';
import { AuthenticationService } from '../../../auth/authentication.service';

@Component({
  selector: 'user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.scss']
})

export class UserNavigationComponent {

  constructor(private __authenticationService: AuthenticationService) {}

  logout() {
    this.__authenticationService.logout()
  }
}