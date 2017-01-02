// Angular
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
// Pvdm Lib
import { PvdmIconComponent } from './pvdm-icon/pvdm-icon.component';
import { PvdmPageHeaderComponent } from './pvdm-page-header/pvdm-page-header.component';
import { PvdmMessagesComponent } from './pvdm-messages/pvdm-messages.component';

@NgModule({
  imports: [ 
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
