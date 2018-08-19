import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { NgxSmartModalService } from '../../../../../node_modules/ngx-smart-modal';
import { HttpService } from '../../../utilities/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Chennai, TamilNadu', 'Trichy, TamilNadu', 'Kochi, Kerala', 'Changi, Singapore'];
  filteredOptions: Observable<string[]>;


  constructor(public httpservice: HttpService,
    public ngxSmartModalService: NgxSmartModalService, private router: Router) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  private gotoAirport(e) {
    this.router.navigate(['airport']);
  }

}
