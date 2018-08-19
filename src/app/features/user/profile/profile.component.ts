import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  panelColor = new FormControl('red');
  selected = '2018';
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

  ngOnInit() {
  }

}
