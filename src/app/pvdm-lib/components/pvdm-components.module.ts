// Angular
import { NgModule }     from '@angular/core';
import { NgbModule }    from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
// Pvdm Lib
import { PvdmIconComponent }       from './pvdm-icon/pvdm-icon.component';
import { PvdmPageHeaderComponent } from './pvdm-page-header/pvdm-page-header.component';
import { PvdmMessagesComponent }   from './pvdm-messages/pvdm-messages.component';

@NgModule({
  imports: [ 
    NgbModule,
    CommonModule
  ],
  declarations: [ 
    PvdmIconComponent,
    PvdmPageHeaderComponent,
    PvdmMessagesComponent,
  ],
  exports: [ 
    PvdmIconComponent,
    PvdmPageHeaderComponent,
  ]
})
export class PvdmComponentsModule { }
