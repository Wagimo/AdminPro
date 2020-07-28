import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, observable, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})



export class RxjsComponent implements OnDestroy {

  subs : Subscription;

    
  constructor() { 
  
    this.subs = this.retornaInterval()
    .subscribe( console.log ) ;

//  this.retornaObsrvable()
//   .pipe(
//     retry(1)
//   )
//   .subscribe(
//     valor => console.log("Subs", valor),
//     err => console.error(err),
//     ()=> console.info("Obs finalizado")

//   );


  }
  ngOnDestroy(): void {    
    this.subs.unsubscribe();
  }

  retornaObsrvable() : Observable<Number>{

    let i=0;


  return  new Observable<number> ( observer => {
    
    const interval = setInterval(()=>{
  
      i++;  
      observer.next(i);   

      if(i==5)
      {
        clearInterval(interval);
        observer.complete();
      }

      if(i==2)
      {
        i=0;
        clearInterval(interval);
        observer.error("i es igual a 2");
      }
    },1000);

  });

  

  }

  retornaInterval() : Observable<number>{
    return  interval(500).pipe(
     // take(10),
      map(x=> x+1),
      filter(valor => valor % 2 == 0)

    );
   
  }
}