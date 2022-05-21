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
    this.getlocation()
  }

  getlocation() {
    var locs = [{ city: "Tunis", lat: 33.8439408, lng: 9.400138 }, { city: "Sfax", lat: 34.739739, lng: 10.7598516 }, { city: "Sousse", lat: 35.828829, lng: 10.640525 }, { city: "Kairouan", lat: 35.6775263, lng: 10.1006205 }, { city: "Kebili", lat: 33.7058066, lng: 8.9705891 }, { city: "Bizerte", lat: 37.2732415, lng: 9.8713665 }, { city: "Sidi Bouzid", lat: 34.881181, lng: 9.52635984718234 }, { city: "Gabes", lat: 33.8833922, lng: 10.0971389 }, { city: "Ariana", lat: 36.859939, lng: 10.190973 }, { city: "Jendouba", lat: 36.5013895, lng: 8.7811635 }, { city: "Gafsa", lat: 34.425149, lng: 8.786218 }, { city: "Beja", lat: 36.7270373, lng: 9.1814915 }, { city: "Kasserine", lat: 35.1691517, lng: 8.8364635 }, { city: "Monastir", lat: 35.7398399, lng: 10.7986953383714 }, { city: "Tataouine", lat: 32.929216, lng: 10.451229 }, { city: "Ben Arous", lat: 36.7488603, lng: 10.22460082 }, { city: "Mahdia", lat: 35.48810105, lng: 10.9626808407717 }, { city: "El Kef", lat: 36.1675068, lng: 8.7043493 }, { city: "Nabeul", lat: 36.4823676, lng: 10.6707196978804 }, { city: "Manouba", lat: 36.8115973, lng: 10.0857631871932 }, { city: "Tozeur", lat: 33.913485, lng: 8.11182407105263 }, { city: "Zaghouan", lat: 36.41171955, lng: 10.2019797844446 }, { city: "Medenine", lat: 33.339592, lng: 10.491185 }, { city: "Siliana", lat: 36.085041, lng: 9.369468 }]
    var lat = 0;
    var lng = 0;
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

        }
        ,(error) => 
        {
          alert("Veuillez activer et accepter l'accès du GPS pour cette application afin qu'elle puisse fonctionner.")
        }
        );

  }


  selectloca() {
    // @ts-ignore
    document.getElementById("la").style.backgroundColor = "#75c612"
        // @ts-ignore
    document.getElementById("lb").style.backgroundColor = "#ffffff"
    localStorage.setItem("locmode","auto") ;
    localStorage.setItem("selectlocmod","x") ;

  }

  selectlocb() {
        // @ts-ignore
        document.getElementById("la").style.backgroundColor = "#ffffff"
        // @ts-ignore
    document.getElementById("lb").style.backgroundColor = "#75c612"
    localStorage.setItem("locmode","man") ;
    localStorage.setItem("selectlocmod","x") ;

  }

  next() {

    if (localStorage.getItem("selectlocmod") == "x") {

    if (localStorage.getItem("locmode") == "man") {
             // @ts-ignore
      var x = document.getElementById("man").value
      localStorage.setItem("currentpos",x) ;
    }

            // @ts-ignore
            document.getElementById("interfacea").style.display = "none"
            
            // @ts-ignore
            document.getElementById("interfaceb").style.display = "block"
  } else {
    alert("Veuillez sélectionner un mode de positionnement.")
  }
    
  }

  nextnext() {
    if (localStorage.getItem("locmode") == "man") {
             // @ts-ignore
      var x = document.getElementById("man").value
      localStorage.setItem("currentpos",x) ;
    }

            // @ts-ignore
            document.getElementById("interfaceb").style.display = "none"
            
            // @ts-ignore
            document.getElementById("interfacec").style.display = "block"
    
  }


  done() {
    localStorage.setItem("launch","fr") ;
    localStorage.setItem("oldversion","0")
    location.reload();

  }


}
