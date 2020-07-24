import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private thema = document.querySelector("#theme");

  constructor() {    
    const themLocal = localStorage.getItem('theme') || "./assets/css/colors/blue.css";     
    this.thema.setAttribute("href",themLocal); 
   }


   changeTheme(themeSelected:string){
    
    const url =`./assets/css/colors/${themeSelected}.css`   
    this.thema.setAttribute("href",url);   
    localStorage.setItem('theme', url);
   this.setCurrentThem();
  }

  setCurrentThem()
  {
      const links = document.querySelectorAll(".selector");
  
      links.forEach(element=>{
      element.classList.remove("working");
      const btnTheme = element.getAttribute("data-theme"); 
      const themeBtnUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.thema.getAttribute("href");
      if(currentTheme === themeBtnUrl)
      {
        element.classList.add("working");
      }
    });

  }

}
