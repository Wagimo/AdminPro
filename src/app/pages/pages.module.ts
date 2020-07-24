import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import{ FormsModule } from '@angular/forms';



import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
     DashboardComponent,
     ProgressComponent,
     Graph1Component,
     PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,    
    ComponentsModule ,
    FormsModule
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    PagesComponent
  ]
})
export class PagesModule { }
