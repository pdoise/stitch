import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationEnd } from '@angular/router';

import { PvdmMessage } from './pvdm-messages.model';

@Injectable()
export class PvdmMessagesService {

  constructor(private router: Router) {
  }

  private __messages = new Subject<PvdmMessage>();

  public messageAdded = this.__messages.asObservable();

  public currentRoute(message: PvdmMessage) {
    this.__messages.next(message);
  }

  public nextRoute(message: PvdmMessage) {
  this.router.events
    .map( event => event instanceof NavigationEnd )
    .subscribe( () => {
      this.__messages.next(message);
    });	
  }
}