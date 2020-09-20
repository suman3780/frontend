import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { mockData } from './data.js';
// import * as data from './data.json';
// data.default.primaryMain;
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  // products: any = (data as any).default;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };

  constructor() { }

  public barChartLabels: Label[] = [
    'Jan 2020',
    'Feb 2020',
    'Mar 2020',
    'Apr 2020',
    'May 2020',
    'Jun 2020',
    'Jul 2020',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Balance' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Transaction' },
  ];

  ngOnInit(): void {
    // console.log(data);
    // console.log(data['Investment']);
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}
