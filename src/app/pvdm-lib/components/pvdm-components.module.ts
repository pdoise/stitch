// Angular
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
// Pvdm Lib
import { PvdmPageHeaderComponent } from './pvdm-page-header/pvdm-page-header.component';
import { PvdmMessagesComponent } from './pvdm-messages/pvdm-messages.component';

@NgModule({
  imports: [ 
    CommonModule
  ],
  declarations: [ 
    PvdmPageHeaderComponent,
    PvdmMessagesComponent,
  ],
  exports: [ 
     PvdmPageHeaderComponent,
  ]
})
export class PvdmComponentsModule { }
