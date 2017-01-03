import { Component }     from '@angular/core';
import { AuthenticationService } from '../../../auth/authentication.service';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})

export class SiteHeaderComponent {

  constructor(private __authenticationService: AuthenticationService) {}

}