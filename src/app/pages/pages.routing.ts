import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const routes: Routes = [
    {path: 'dashboard', component: PagesComponent,
  children: [
    {path: '', component: DashboardComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'grafica1', component: Grafica1Component},
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  ]
  },
]

@NgModule({
    
    imports: [ RouterModule.forChild(routes)],
    exports: []
})
export class PagesRoutingModule { }