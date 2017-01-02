import { Component, Input} from '@angular/core';

@Component({
  selector: 'pvdm-icon',
  templateUrl: './pvdm-icon.component.html',
  styleUrls: ['./pvdm-icon.component.scss']
})

export class PvdmIconComponent {

  @Input() name: string;

}