import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRouteModule } from './user.route.module';
import { ChartsModule } from 'ng2-charts';
import { TravelHistoryGraphComponent } from './travel-history-graph/travel-history-graph.component';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatBottomSheetModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    UserRouteModule,
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
  entryComponents: [
    BottomSheetComponent
  ],
  exports: [  ],
  declarations: [
    BottomSheetComponent,
    ProfileComponent,
    TravelHistoryGraphComponent,
  ],
})
export class UserModule { }
