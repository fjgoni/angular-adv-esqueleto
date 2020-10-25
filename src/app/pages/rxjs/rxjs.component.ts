import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import {  retry, take, map, filter  } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

    obs$ : Observable<any>;
    sub  : Subscription;
  constructor() { 
    // let i = -1;

    // this.obs$ = this.returnObservable();

    // this.sub = this.obs$.pipe(retry()).subscribe(
    //   valor => console.log('subs: ', valor),
    //   err => console.warn('Error', err),
    //   () => console.info('Se completo!!')
    // );

    this.sub = this.IntervaloRXJS().subscribe(console.log);
    

  }

  IntervaloRXJS() : Observable<number>{

    return interval(1000).pipe(
      take(10 ),
      map(value => value),
      filter( valor => (valor % 2 === 0 ) ? true : false)
    );

  }

  ngOnInit(): void {
  }

  ngOnDestroy() : void{

    //Cuando se destruye la instancia del componente se desuscribe
    this.sub.unsubscribe();
  }


  returnObservable() : Observable<any>{
    let i = -1;
     let obs$ =  new Observable( observer =>{
      setInterval(()=>{

        i++

        observer.next(i);

      if(i === 4){
        observer.error('i = 2 !!!!');
      }          

        if(i === 6){
          observer.complete();
        }

      },1000)

    });
    return obs$;
  }



}
