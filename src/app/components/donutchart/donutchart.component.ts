import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color} from 'ng2-charts';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit {

  @Input() title : string = 'no valid title';
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  @Input('label') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public colors : Color[] = [
    {backgroundColor: ["#327fa8", "#32a87b", "#a832a2" ]}
  ]

}
