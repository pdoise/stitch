import { Component, Input} from '@angular/core';

@Component({
  selector: 'page-level-messages',
  templateUrl: './page-level-messages.component.html',
  styleUrls: ['./page-level-messages.component.scss']
})
export class PageLevelMessagesComponent {

  @Input() msg: string;
  
}
