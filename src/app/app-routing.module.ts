import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { E404Component } from './pages/e404/e404.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  {path: '', component: PagesComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'grafica1', component: Grafica1Component},
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  
  {path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
