import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { DairyComponent } from './dairy/dairy.component';
import { UserComponent } from './user/user.component';
import { NotificationComponent } from './notification/notification.component';
import { DairyModule } from './dairy/dairy.module';

@NgModule({
  declarations: [
    AppComponent,
    DairyComponent,
    UserComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
