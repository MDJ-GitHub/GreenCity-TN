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
   
    if (localStorage.getItem("startup")) {
    } else {
      localStorage.setItem("startup","0")
    }
    if (localStorage.getItem("startup") == "0") {
      this._router.navigate(['/home']);
    }
    
    if (localStorage.getItem("startup") == "fr") {
      this._router.navigate(['/a-fr-reports']);
    }

    if (localStorage.getItem("startup") == "ar") {
      this._router.navigate(['/ar-news']);
    }

    if (localStorage.getItem("startup") == "en") {
      this._router.navigate(['/en-news']);
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


