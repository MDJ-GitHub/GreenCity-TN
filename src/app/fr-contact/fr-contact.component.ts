import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fr-contact',
  templateUrl: './fr-contact.component.html',
  styleUrls: ['./fr-contact.component.css']
})
export class FrContactComponent implements OnInit {

  constructor(private router: Router, private elementRef: ElementRef, private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getlocation()
  }

  getlocation() {

    if (localStorage.getItem("locmode") == "auto") {
      var locs = [{ city: "Tunis", lat: 33.8439408, lng: 9.400138 }, { city: "Sfax", lat: 34.739739, lng: 10.7598516 }, { city: "Sousse", lat: 35.828829, lng: 10.640525 }, { city: "Kairouan", lat: 35.6775263, lng: 10.1006205},  { city: "Kebili", lat: 33.7058066, lng: 8.9705891 }, { city: "Bizerte", lat: 37.2732415, lng: 9.8713665 }, { city: "Sidi Bouzid", lat: 34.881181, lng: 9.52635984718234 }, { city: "Gabes", lat: 33.8833922, lng: 10.0971389 }, { city: "Ariana", lat: 36.859939, lng: 10.190973 }, { city: "Jendouba", lat: 36.5013895, lng: 8.7811635 }, { city: "Gafsa", lat: 34.425149, lng: 8.786218 },  { city: "Beja", lat: 36.7270373, lng: 9.1814915 }, { city: "Kasserine", lat: 35.1691517, lng: 8.8364635 }, { city: "Monastir", lat: 35.7398399, lng: 10.7986953383714 }, { city: "Tataouine", lat: 32.929216, lng: 10.451229 },  { city: "Ben Arous", lat: 36.7488603, lng: 10.22460082 }, { city: "Mahdia", lat: 35.48810105, lng: 10.9626808407717 }, { city: "El Kef", lat: 36.1675068, lng: 8.7043493 }, { city: "Nabeul", lat: 36.4823676, lng: 10.6707196978804 }, { city: "Manouba", lat: 36.8115973, lng: 10.0857631871932 }, { city: "Tozeur", lat: 33.913485, lng: 8.11182407105263 }, { city: "Zaghouan", lat: 36.41171955, lng: 10.2019797844446 }, { city: "Medenine", lat:  33.339592, lng: 10.491185 }, { city: "Siliana", lat:  36.085041, lng: 9.369468 }]
      var lat = 0;
      var lng = 0;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          lng = position.coords.longitude;
          lat = position.coords.latitude;
          var cc = "Tunis";
          var clat = 33.8439408;
          var clng = 9.400138;
          locs.forEach(function (arrayItem) {
            if (Math.abs((lat - arrayItem.lat) + (lng - arrayItem.lng)) < Math.abs((lat - clat) + (lng - clng))) {
              cc = arrayItem.city;
              clat = arrayItem.lat;
              clng = arrayItem.lng;
            }
          });
          (document.getElementById('currentposition') as HTMLFormElement).innerHTML =
            '<img src="/assets/img/location.png" width="15" height="20" class="d-inline-block align-top"alt=""> ' + cc;
          localStorage.setItem("currentpos", cc);
        });
      } else {
        console.log("No support for geolocation")
      }
    }
    if (localStorage.getItem("locmode") == "all") {
      (document.getElementById('currentposition') as HTMLFormElement).innerHTML =
        '<img src="/assets/img/location.png" width="15" height="20" class="d-inline-block align-top"alt=""> ' + "Tous";
    }
    if (localStorage.getItem("locmode") == "man") {
      var cc = localStorage.getItem("currentpos");
      (document.getElementById('currentposition') as HTMLFormElement).innerHTML =
        '<img src="/assets/img/location.png" width="15" height="20" class="d-inline-block align-top"alt=""> ' + cc;
    }
  }

  navselectall() {
    localStorage.setItem("locmode", "all");
    location.reload();
  }

  viewselectman() {
      // @ts-ignore
      document.getElementById("locman").style.display = "inline-flex"

  }

  navselectman() {
    localStorage.setItem("locmode", "man");
        // @ts-ignore
        var t = document.getElementById("navman").value ;
    localStorage.setItem("currentpos",t)
    location.reload();
  }

  navselectauto() {
    localStorage.setItem("locmode", "auto");
    location.reload();
  }

  send() {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var name = (document.getElementById("name") as HTMLFormElement)['value'] ;
    var sub = (document.getElementById("sub") as HTMLFormElement)['value'] ;
    var email = (document.getElementById("email") as HTMLFormElement)['value'] ;
    var message = (document.getElementById("message") as HTMLFormElement)['value'] ;

    if (name == "") {
      alert('Veuillez remplir le formulaire en entier pour fournir le message.')
      return;
    }

    if (sub == "") {
      alert('Veuillez remplir le formulaire en entier pour fournir le message.')
      return;
    }

    if (email == "") {
      alert('Veuillez remplir le formulaire en entier pour fournir le message.')
      return;
    }

    if (message == "") {
      alert('Veuillez remplir le formulaire en entier pour fournir le message.')
      return;
    }

    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s + " " + dd + '/' + mm + '/' + yyyy;

    const object = {
      name: name,
      sub: sub,
      email: email,
      message: message,
      date: time
    }
  
  
    this.http.post("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/messages.json",object, httpOptions).subscribe(responseData => {
     alert("Le message a été envoyé avec succès !")
     this.router.navigate(['/fr-news']);
    });
  }

  aboutme() {
    alert("GreenCity est une application Web mobile hybride permettant de signaler les problèmes civils/environnementaux quotidiens ou de les consulter ainsi que d'autres informations. \n\n Développé par : Mohamed Dhia Jebali et Aymen Masmoudi \n Fabriqué à partir de SSS Innovation Startup \n\n Votre version actuelle : v"+ localStorage.getItem("oldversion"))
    
      }


  

}
