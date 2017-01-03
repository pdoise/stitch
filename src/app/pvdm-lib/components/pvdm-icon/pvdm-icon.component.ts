import { Component, Input} from '@angular/core';

@Component({
  selector: 'pvdm-icon',
  template: `<span class="glyphicon-{{ name }} pvdm-icon"></span>`,
  styleUrls: ['./pvdm-icon.component.scss']
})

export class PvdmIconComponent {

  @Input() name: string;

}