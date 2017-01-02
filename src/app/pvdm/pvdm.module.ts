// Angular
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
// Modules
import { PvdmComponentsModule } from '../pvdm-lib/components/pvdm-components.module';
// Components
import { HubAccountsComponent } from './hub-accounts/hub-accounts.component';
// Services
import { PvdmMessagesService } from '../pvdm-lib/components/pvdm-messages/pvdm-messages.service';
import { routing } from '../app.routing';

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    PvdmComponentsModule,
    routing 
  ],
  declarations: [ 
    HubAccountsComponent
  ],
  exports: [ 
    HubAccountsComponent 
  ],
  providers: [ 
    PvdmMessagesService 
  ]
})
export class PvdmModule { }
