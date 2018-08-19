import { Component } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.less']
})
export class BottomSheetComponent  {
  myControl = new FormControl();
  options: string[] = ['Chennai, TamilNadu', 'Trichy, TamilNadu', 'Kochi, Kerala', 'Changi, Singapore'];
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
