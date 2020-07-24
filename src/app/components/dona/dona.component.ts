import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label,Color } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title:string = "Sin Titulo";
  @Input() labels:string[] = [];
  @Input() data:number[] = [];

  
  public colors : Color[]=[
    {backgroundColor:['#6857E6','#009FEE', '#F02059' ]}    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
