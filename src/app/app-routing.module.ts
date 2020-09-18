import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from '../app/pages/pages.routing';
import { AuthRoutingModule } from '../app/auth/auth.routing';

import { E404Component } from './pages/e404/e404.component';


const routes: Routes = [
  
  {path: '', redirectTo: "/dashboard", pathMatch: "full"},
  {path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            AuthRoutingModule     
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
