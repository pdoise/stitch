import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HubAccountsComponent } from './pvdm/hub-accounts/hub-accounts.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HubAccountsComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
