import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DairyComponent } from 'src/app/modules/dairy/dairy.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginComponent } from 'src/app/modules/login/login.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    DairyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule

  ]
})
export class DefaultModule { }
