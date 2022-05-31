import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SHA256, enc } from "crypto-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Greencity';

  constructor(private elementRef: ElementRef, private http: HttpClient, private _router: Router) { }
  ngOnInit(): void {

    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    const o = {
      name:"x",
    }

    
      this.http.put("https://a.free.mdj.ravendb.cloud/objects.json", o, httpOptions).subscribe(responseDataxx => {
  })


    localStorage.setItem("newversion","9")

    if (localStorage.getItem("oldversion")) {

   

    // @ts-ignore
    var a = localStorage.getItem("oldversion")

    // @ts-ignore
    var b = localStorage.getItem("newversion")

    if (localStorage.getItem("oldversion") != localStorage.getItem("newversion")) {
      alert("Les dernières mises à jour ! :  \n Version Ancienne : v"+a+"\n Version Nouvelle : v"+b+"\n\n  Ce qui est nouveau ? : \n - Corrections des terms. \n\n N'oubliez pas de signaler une anomalie au sein de l'application avec l'interface Contact") ;
     
          // @ts-ignore
      localStorage.setItem("oldversion",localStorage.getItem("newversion")) ; 

       }


      } else {
        alert("Veuillez activer et accepter l'accès du GPS pour cette application afin qu'elle puisse fonctionner.");
      }

    this.startapp();
  }

  startapp() {


    


    var routex = window.location.href

    if (routex.includes('/a-fr')) {

      if (localStorage.getItem("adminnom")) {

        const httpOptions = {
          headers: new HttpHeaders()
        }
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Content-Type', 'application/json');
        httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


        var username = localStorage.getItem("adminnom")
        var password = localStorage.getItem("adminp")
              // @ts-ignore
              var cpassword = SHA256(password).toString(enc.Hex);
     // @ts-ignore
              var x = username.replace(' ', '_');
        this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/adminaccounts/" + x + "-" + cpassword + ".json", httpOptions).subscribe(responseData => {
          if (responseData != null) {



            if (routex.includes('/a-fr-home')) {
              this._router.navigate(['/a-fr-reports']);
            } else if
      
            (routex.includes('/a-fr-reports')) {
              this._router.navigate(['/a-fr-reports']);
            }

            
            else if (routex.includes('/a-fr-accounts')) {
              this._router.navigate(['/a-fr-accounts']);
            }
            
            else if (routex.includes('/a-fr-events')) {
              this._router.navigate(['/a-fr-events']);
            }

            else if (routex.includes('/a-fr-messages')) {
              this._router.navigate(['/a-fr-messages']);
            }

            else if (routex.includes('/a-fr-adminaccounts')) {
              this._router.navigate(['/a-fr-adminaccounts']);
            }

            else if (routex.includes('/a-fr-info')) {
              this._router.navigate(['/a-fr-info']);
            }

            else if (routex.includes('/a-fr-approved')) {
              this._router.navigate(['/a-fr-approved']);
            }

            else {
              this._router.navigate(['/a-fr-home']);
            }

          } else {
            alert("Les informations d'identification existantes ne sont plus valides. Veuillez vous connecter avec d'autres informations d'identification.")
            this._router.navigate(['/a-fr-home']);
          }

        })

      } else {
        this._router.navigate(['/a-fr-home']);
      }






    } else {

      navigator.geolocation.getCurrentPosition((position) => {
      }
      ,(error) => 
      {
        alert("Veuillez activer et accepter l'accès du GPS pour cette application afin qu'elle puisse fonctionner.")
      }
      );

      if (localStorage.getItem("launch")) {
      } else {
        localStorage.setItem("launch", "0")
      }
      if (localStorage.getItem("launch") == "0") {
        this._router.navigate(['/home']);
      }

      if (localStorage.getItem("launch") == "fr") {
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

        if (routex.includes('/fr-conf')) {
          this._router.navigate(['/fr-conf']);
          return;
        }
        this._router.navigate(['/fr-problems']);
      }



    }






  }

  startfr() {

    localStorage.setItem("startup", "fr")
    this._router.navigate(['/fr-problems']);
  }


  startar() {

    localStorage.setItem("startup", "ar")
    this._router.navigate(['/ar-news']);


  }

  starten() {

    localStorage.setItem("startup", "en")
    this._router.navigate(['/en-news']);


  }








}


