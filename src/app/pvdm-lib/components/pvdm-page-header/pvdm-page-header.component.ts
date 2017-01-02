import { Component, Input} from '@angular/core';

@Component({
  selector: 'pvdm-page-header',
  templateUrl: './pvdm-page-header.component.html',
  styleUrls: ['./pvdm-page-header.component.scss']
})
export class PvdmPageHeaderComponent {

  @Input() header: string;
  @Input() icon: string;

}
