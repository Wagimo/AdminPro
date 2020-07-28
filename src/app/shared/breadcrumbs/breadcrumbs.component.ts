import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { pipe, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy  {
public titulo: string = "";
public tituloSubs$ :Subscription;

  constructor(private router : Router) {   
    this.tituloSubs$ = this.argumentosRuta()
    .subscribe(({title}) =>
    { 
      console.log(title);
      this.titulo = title ;
      document.title = `AdmninPro - ${title}` ;
     
     } );
   }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

 argumentosRuta(){
  return this.router.events
  .pipe(
    filter(data=> data instanceof ActivationEnd),
    filter((data: ActivationEnd) => data.snapshot.firstChild == null),
    map((data: ActivationEnd) =>  data.snapshot.data )

  );
  
 }

}
