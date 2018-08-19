import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'user',
    loadChildren: './features/user/user.module#UserModule'
  },
  {
    path: 'airport',
    loadChildren: './features/airport/airport.module#AirportModule'
  },
  {
    path: '**',
    redirectTo: '' // NavConstants.PageNotFound
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouteModule { }
