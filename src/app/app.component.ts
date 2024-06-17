import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-2024';
  readMorFirst=false;
  readMoreSecond = false;

  goToCompany(name: string){
    switch(name){
      case "HTC":
        window.open("https://www.htcinc.com/");
        break;
      case "DBS":
        window.open("https://www.dbs.com/in/index/default.page");
        break;
      case "OpenText":
        window.open("https://www.opentext.com/");
        break;
      default:
        window.open("#");
    }
    
  }

  readMore1(){
    this.readMorFirst = true;
  }
  readLess(){
    this.readMorFirst = false
  }
  readLess2(){
    this.readMoreSecond = false;
  }
  readMore2(){
    this.readMoreSecond = true;
  }
  click(){
   let mobileNav =  document.querySelector(".mobile-nav");
   if(mobileNav != null)
     mobileNav.classList.add('open');
  }

  close(){
    let mobileNav =  document.querySelector(".mobile-nav");
    if(mobileNav != null)
      mobileNav.classList.add('open');
  }

  goToLinkdin(){
    window.open("https://www.linkedin.com/in/suman-chatterjee-993a30bb/");
  }
}
