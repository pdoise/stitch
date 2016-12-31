import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthenticationService } from './auth/authentication.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PageHeaderComponent } from './common/components/page-header/page-header.component';
import { PageLevelMessagesComponent } from './common/components/page-level-messages/page-level-messages.component';
import { NotificationsService } from './common/components/notifications/notifications.service';
import { Notifications } from './common/components/notifications/notifications.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LoginComponent,
    DashboardComponent,
    PageLevelMessagesComponent,
    Notifications
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
    PageLevelMessagesComponent,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
