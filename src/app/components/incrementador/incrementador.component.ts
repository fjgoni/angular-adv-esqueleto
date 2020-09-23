import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() btnClass : string = 'btn btn-primary'; 
  @Input("valor") progress:number = 45;
 
  @Output() valorSalida : EventEmitter<Number> = new EventEmitter();

  cambiarProgress(number:number){

    if(this.progress <= 0 && number <= 0 ){
      this.valorSalida.emit(0);
      return this.progress = 0;
    }
    if(this.progress >= 100 && number >= 0){
      this.valorSalida.emit(100);
     return this.progress = 100;
     
    }
    this.progress = this.progress+number;
    this.valorSalida.emit(this.progress);

  }

  onChange( nuevoValor: number ){

    if(nuevoValor >= 100){
      nuevoValor= 100;
    }else if(nuevoValor <= 0){
      nuevoValor  = 0;
    }else{
      nuevoValor = nuevoValor;
    }


    this.valorSalida.emit(nuevoValor);
  }



}
