import { Component } from '@angular/core';

import { PvdmMessagesService } from './pvdm-messages.service';
import { PvdmMessage } from './pvdm-messages.model';

@Component({
  selector: 'pvdm-messages',
  templateUrl: './pvdm-messages.component.html',
  styleUrls: ['./pvdm-messages.component.scss']
})

export class PvdmMessages {
  private _notes: PvdmMessage[];

  constructor(private _messages: PvdmMessagesService) {
    this._notes = new Array<PvdmMessage>();

    _messages.noteAdded.subscribe(note => {
      this._notes.push(note);

      setTimeout(() => { this.hide.bind(this)(note) }, 3000);
    });
  }

  private hide(note) {
    let index = this._notes.indexOf(note);

    if (index >= 0) {
        this._notes.splice(index, 1);
    }
  }
}