import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {


  
  constructor(private settingsService : SettingsService) {} 

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme : string){
   
    this.settingsService.changeTheme(theme);
    this.settingsService.checkCurrentTheme();
  }

  

}
