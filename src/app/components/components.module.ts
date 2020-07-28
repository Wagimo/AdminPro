import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import { RouterModule} from '@angular/router';


import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';




@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    RouterModule
  ],
  exports:[IncrementadorComponent, DonaComponent]
})
export class ComponentsModule { }
