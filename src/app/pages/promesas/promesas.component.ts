import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(u=> console.log(u));

    // const promesa = new Promise((resolve, reject)=>{

    //   if(false)
    //    resolve("Hola Mundo");
    //    else
    //    reject("Fallo la promesa");

    // });

    // promesa
    // .then(e => console.log(e))
    // .catch(e=> console.error(e));

    // console.log("Fin Promesa");

  }

  getUsuarios(){

    return new Promise(resolve=> {
      
      fetch("https://reqres.in/api/users")
      .then(resp => resp.json())
      .then(body=> resolve( body.data ) );

    });
   
    
   
  }
   
  

}
