import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo : string;
  public titulosubs$ : Subscription; 
  constructor( private router : Router) {

    this.titulosubs$ = this.getRouterArgs().subscribe(({titulo})=>{
      this.titulo = titulo;
      document.title = `AdminPro | ${titulo}`
    });

   }
  ngOnDestroy(): void {
    this.titulosubs$.unsubscribe();
  }

  ngOnInit(): void {


  }

  getRouterArgs(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter ((event : ActivationEnd) => event.snapshot.firstChild === null),
      map(data =>{
        return data.snapshot.data;
      }))
     
  }

}
