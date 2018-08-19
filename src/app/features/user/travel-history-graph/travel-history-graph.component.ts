import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-history-graph',
  templateUrl: './travel-history-graph.component.html',
  styleUrls: ['./travel-history-graph.component.less']
})
export class TravelHistoryGraphComponent implements OnInit {

  // lineChart
public lineChartData: Array<any> = [
  {data: [1, 2, 0, 5, 1, 7, 0, 1, 0, 0, 5, 0], label: 'Count'}
];
public lineChartLabels: Array<any> = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'];
public lineChartOptions: any = {
  responsive: true
};
public lineChartColors: Array<any> = [

  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  }
];
public lineChartLegend = false;
public lineChartType = 'line';
  constructor() { }

  ngOnInit() {
  }


// events
public chartClicked(e: any): void {
  console.log(e);
}

public chartHovered(e: any): void {
  console.log(e);
}

}
