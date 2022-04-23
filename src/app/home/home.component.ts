import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
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
