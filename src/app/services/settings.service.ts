import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public theme = document.querySelector("#theme")

  constructor() {
    const url = localStorage.getItem('theme') || `./assets/css/colors/purple.css` ;
    this.theme.setAttribute('href', url);


  }




   changeTheme(theme : string){
    const url = `./assets/css/colors/${theme}.css`    
    this.theme.setAttribute('href', url);
    localStorage.setItem('theme', url);
  } 

  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');


    links.forEach(element =>{
      element.classList.remove('working')
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeURL = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.theme.getAttribute('href');
    
      if(btnThemeURL === currentTheme){
          element.classList.add('working');
      }

    })
  }

}
