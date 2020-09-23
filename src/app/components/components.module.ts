import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonutchartComponent } from './donutchart/donutchart.component';
import {  ChartsModule  } from 'ng2-charts';



@NgModule({
  declarations: [IncrementadorComponent, DonutchartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [IncrementadorComponent, DonutchartComponent]
})
export class ComponentsModule { }
 