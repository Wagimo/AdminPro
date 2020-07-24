import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
 
 

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    
    this.settings.setCurrentThem();
  }

  changeTheme(themeSelected:string){
    
    this.settings.changeTheme(themeSelected);
    
  }

  

}
