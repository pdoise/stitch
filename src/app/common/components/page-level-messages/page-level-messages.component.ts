import { Component, Input} from '@angular/core';

@Component({
  selector: 'page-level-messages',
  templateUrl: './page-level-messages.component.html',
  styleUrls: ['./page-level-messages.component.scss']
})
export class PageLevelMessagesComponent {

  @Input() msg = 'hi';
  @Input() type = 'danger';

  forCurrentRoute(messages, type) {
    this.msg = messages;
    this.type = type;
  }
}
