import { Routes } from '@angular/router';
import { NotificationComponent } from './notification.component';

export const routes: Routes = [
  {path: ':slug', component: NotificationComponent},
];
