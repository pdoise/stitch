// Angular
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
// Pvdm Lib
import { PvdmPageHeaderComponent } from '../pvdm-lib/components/pvdm-page-header/pvdm-page-header.component';
import { PvdmMessagesComponent } from '../pvdm-lib/components/pvdm-messages/pvdm-messages.component';
// Components
import { HubAccountsComponent } from './hub-accounts/hub-accounts.component';
// Services
import { PvdmMessagesService } from '../pvdm-lib/components/pvdm-messages/pvdm-messages.service';
import { routing } from '../app.routing';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    routing 
  ],
  declarations: [ 
    PvdmPageHeaderComponent,
    PvdmMessagesComponent,
    HubAccountsComponent
  ],
  exports: [ 
     PvdmPageHeaderComponent,
     PvdmMessagesComponent,
     HubAccountsComponent 
  ],
  providers: [ 
    PvdmMessagesService 
  ]
})
export class PvdmModule { }
