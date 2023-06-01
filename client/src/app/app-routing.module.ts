import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DairyComponent } from './dairy/dairy.component';
import { NotificationComponent } from './notification/notification.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // Define your child routes within the main layout
      { path: '', pathMatch: 'full', redirectTo: 'dairy' },
      { path: 'dairy', component: DairyComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'user', component: UserComponent },
      // { path: 'products', component: ProductsComponent },
      // Add more child routes as needed
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
