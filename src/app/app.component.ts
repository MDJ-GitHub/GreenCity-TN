import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Greencity';

  constructor(private _router: Router) { }

  ngOnInit(): void {
    
    this.startapp() ;
  }

  startapp() {

    var routex = window.location.href

    if (routex.includes('/a-fr')) {
      this._router.navigate(['/a-fr-reports']);
    } else {

      if (localStorage.getItem("startup")) {
      } else {
        localStorage.setItem("startup","0")
      }
      if (localStorage.getItem("startup") == "0") {
        localStorage.setItem("locmode","auto")
        localStorage.setItem("startup","fr")
        this._router.navigate(['/fr-news']);
      }
      
      if (localStorage.getItem("startup") == "fr") {
        if (routex.includes('/fr-events')) {
          this._router.navigate(['/fr-events']);
          return;
        }
        if (routex.includes('/fr-info')) {
          this._router.navigate(['/fr-info']);
          return;
        }
        if (routex.includes('/fr-profile')) {
          this._router.navigate(['/fr-profile']);
          return;
        }
        if (routex.includes('/fr-contact')) {
          this._router.navigate(['/fr-contact']);
          return;
        }
        this._router.navigate(['/fr-news']);
      }
  
      if (localStorage.getItem("startup") == "ar") {
        this._router.navigate(['/ar-news']);
      }
  
      if (localStorage.getItem("startup") == "en") {
        this._router.navigate(['/en-news']);
      }

    }
 
   
  

    

}

startfr() {
   
    localStorage.setItem("startup","fr")
    this._router.navigate(['/fr-news']);
  }


startar() {
   
  localStorage.setItem("startup","ar")
  this._router.navigate(['/ar-news']);


}

starten() {
   
  localStorage.setItem("startup","en")
  this._router.navigate(['/en-news']);


}



 




}


