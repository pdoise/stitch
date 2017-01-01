import { Component } from '@angular/core';

import { PvdmMessagesService } from './pvdm-messages.service';
import { PvdmMessage } from './pvdm-messages.model';

@Component({
  selector: 'pvdm-messages',
  templateUrl: './pvdm-messages.component.html',
  styleUrls: ['./pvdm-messages.component.scss']
})

export class PvdmMessagesComponent {
  private __messages: PvdmMessage[];

  constructor(private __messageService: PvdmMessagesService) {
    this.__messages = new Array<PvdmMessage>();

    __messageService.messageAdded.subscribe(message => {
      this.__messages.push(message);
    });
  }

  private hide(message) {
    let index = this.__messages.indexOf(message);

    if (index >= 0) {
        this.__messages.splice(index, 1);
    }
  }
}