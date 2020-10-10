import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

    menuItems : any[];
  constructor( private _sideBarService : SidebarService) {

    this.menuItems = _sideBarService.menu;
    console.log(this.menuItems);
    console.log(this.menuItems[0].submenu);

   }

  ngOnInit(): void {
  
  

  }



}
