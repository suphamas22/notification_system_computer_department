import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DairyComponent } from 'src/app/modules/dairy/dairy.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav'

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    DairyComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatCardModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule
 
  ]
})
export class DefaultModule { }
