import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component implements OnInit {

  public labelsVentas : string[] = ["Ventas 1","Ventas 2","Ventas 3"];
  public dataVentas : number[] =  [350, 450, 100];
  

  public labelsGastos : string[] = ["Gastos 1","Gastos 2","Gastos 3"];
  public dataGastos : number[] =  [250, 1500, 366];

  public labelsPpto : string[] = ["Ppto 1","Ppto 2","Ppto 3"];
  public dataPpto : number[] =  [210, 300, 100];
  
  public labelsReal : string[] = ["Real 1","Real 2","Real 3"];
  public dataReal : number[] =  [100, 125, 150];

  constructor() { }

  ngOnInit(): void {
  }

}
