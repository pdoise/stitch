import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthenticationService } from './auth/authentication.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PvdmPageHeaderComponent } from './pvdm-lib/components/pvdm-page-header/pvdm-page-header.component';
import { PvdmMessagesService } from './pvdm-lib/components/pvdm-messages/pvdm-messages.service';
import { PvdmMessagesComponent } from './pvdm-lib/components/pvdm-messages/pvdm-messages.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PvdmPageHeaderComponent,
    LoginComponent,
    DashboardComponent,
    PvdmMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    PvdmMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
