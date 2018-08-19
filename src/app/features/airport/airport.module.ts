import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AirportRouteModule } from './airport.route.module';
import {
  MatToolbarModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatChipsModule,
  MatBottomSheetModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule } from '@angular/material';
import { NgxSmartModalModule } from '../../../../node_modules/ngx-smart-modal';

@NgModule({
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot(),
    AirportRouteModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule
  ],
  declarations: [DashboardComponent]
})
export class AirportModule { }
