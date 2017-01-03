import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationEnd } from '@angular/router';

import { PvdmMessage } from './pvdm-messages.model';

@Injectable()
export class PvdmMessagesService {

  constructor(private __router: Router) {
  }

  private __messages = new Subject<PvdmMessage>();

  public messageAdded = this.__messages.asObservable();

  public currentRoute(message: PvdmMessage) {
    this.__messages.next(message);
  }

  public nextRoute(message: PvdmMessage) {
    this.__router.events.subscribe(path => {
    	if (path instanceof NavigationEnd)
        this.__messages.next(message);
    });
  }
}