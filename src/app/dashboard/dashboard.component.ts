import { Component } from '@angular/core';

@Component({
  selector: 'my-dashboard',
  template: `<h3>My Dashboard</h3><p><a [routerLink]="['/login']">Logout</a></p>`
})
export class DashboardComponent { }