// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
// Modules
import { PvdmModule } from './pvdm/pvdm.module';
import { PvdmComponentsModule } from './pvdm-lib/components/pvdm-components.module';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// Services
import { AuthGuard } from './auth/auth.guard';
import { AuthenticationService } from './auth/authentication.service';
import { PvdmMessagesService } from './pvdm-lib/components/pvdm-messages/pvdm-messages.service';
import { HttpErrors } from './http-errors/http-errors';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PvdmComponentsModule,
    PvdmModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    PvdmMessagesService,
    {provide: XHRBackend, useClass: HttpErrors}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
