import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from '../pages/pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import {  Router, RouterModule } from '@angular/router';
@NgModule({ 
  declarations: [  
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [  PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DashboardComponent]
})
export class PagesModule { }
