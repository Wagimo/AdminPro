import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit  {
  
  ngOnInit() {
    this.colorButton = `btn ${ this.colorButton }`;
  }


  //renombrar el nombre del input!!
  @Input('valor') progreso:number = 50;
  @Input('class') colorButton :string = "btn-primary";

  @Output('valor') valorIncremento: EventEmitter<number> = new EventEmitter();


 cambiarValor(valor:number)
 {
    
    if(this.progreso >= 100 && valor >=0 )
    {
      this.valorIncremento.emit(100);
      return this.progreso = 100;
    }

    if(this.progreso <= 0 && valor <= 0 )
    {
      this.valorIncremento.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.valorIncremento.emit( this.progreso );
    
 }

 onChange(valor:number){
   if(valor > 100)
   this.progreso = 100;
   else if(valor < 0)
   this.progreso = 0;
   else
   this.progreso = valor;

   this.valorIncremento.emit(this.progreso);
 }
}
