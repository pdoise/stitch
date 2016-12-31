import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { PvdmMessage } from './pvdm-messages.model';

@Injectable()
export class PvdmMessagesService {
  private _messages = new Subject<PvdmMessage>();

  public messageAdded = this._messages.asObservable();

  public add(message: PvdmMessage) {
    this._messages.next(message);
  }
}