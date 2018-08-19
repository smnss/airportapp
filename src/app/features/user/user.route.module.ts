import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '../../../../node_modules/@angular/common';

const userRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRouteModule { }
