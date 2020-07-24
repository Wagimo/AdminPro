import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu:any[] = [
    {
      title:'DashBoard',
      icon:'mdi mdi-gauge',
      submenu:[
        { title:'Home',url:'/'},
        { title:'Progressbar',url:'progress'},
        { title:'Gráfica',url:'grafica'}
      ]
    }  
  ];  

  constructor() { }
}
