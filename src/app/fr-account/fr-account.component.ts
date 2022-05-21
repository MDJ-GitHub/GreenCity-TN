import { Component, OnInit, ElementRef  } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fr-account',
  templateUrl: './fr-account.component.html',
  styleUrls: ['./fr-account.component.css']
})
export class FrAccountComponent implements OnInit {

  constructor(private elementRef: ElementRef, private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getlocation()
    this.getInfo()
    localStorage.setItem("profile-photoo","assets/img/person-fill.png")
  }

  profileph() {



    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
              let files =   Array.from(input.files as unknown as HTMLFormElement);
              var loadFile = function(_event: any) {
                var reader = new FileReader();
                reader.onload = function(){
                 let x =  document.createElement('img')
                 x.id = "pp" ;
                 x.style.width = "100px";
                 x.style.height ="100px";
                 x.style.borderRadius = "50%" ;
                 (document.getElementById('photoprofile') as HTMLFormElement).appendChild(x);
                  var output = document.getElementById('pp');

                  (output as HTMLFormElement)['src'] = reader.result;
                  // @ts-ignore
                  localStorage.setItem("profile-photoo", reader.result) ;
                };
                reader.readAsDataURL(_event.target.files[0]);
                                    
              };
              loadFile(event) ;

          };
    input.click();

   
  }

  getInfo() {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


    if (localStorage.getItem("profile-name")) {
      var name = localStorage.getItem("profile-name")
      var phone = localStorage.getItem("profile-phone")
       // @ts-ignore
      var x = name

           // @ts-ignore
                while (x.includes(" ")) {
                   // @ts-ignore
                   x =  x.replace(' ','_');
                }
      
      this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/"+x+"-"+phone+".json",httpOptions).subscribe(responseData => {
        if (responseData != null) {

        console.log(responseData) ;
        (document.getElementById("name") as HTMLElement).innerHTML = '<img src="/assets/img/person.png" width="25" height="25"> &nbsp; ' + name ;
        (document.getElementById("phone") as HTMLElement).innerHTML = '<img src="/assets/img/phone.png" width="20" height="25"> &nbsp; ' + phone ;
            // @ts-ignore
        (document.getElementById("photo") as HTMLElement).innerHTML = '<img src="'+responseData.photo+'" width="150" height="150" style="border-radius: 50%;"> &nbsp; ' ;
         // @ts-ignore
        (document.getElementById("nbrpro") as HTMLElement).innerHTML = '<img src="/assets/img/document-richtext.png" width="25" height="25"> &nbsp; ' + responseData.nbrpro ;
         // @ts-ignore
        (document.getElementById("score") as HTMLElement).innerHTML = '<img src="/assets/img/star.png" width="25" height="25"> &nbsp; ' + responseData.score ;
        (document.getElementById("profile") as HTMLElement).style.display ="block" ;
        (document.getElementById("waiting") as HTMLElement).style.display ="none" ;

      } else {
        alert("Le profil de votre compte est supprimé par les administrateurs ou corrompu, veuillez contacter les administrateurs pour plus d'informations.") ;
        (document.getElementById("newprofile") as HTMLElement).style.display ="block" ;
        (document.getElementById("waiting") as HTMLElement).style.display ="none" ;
        
      }

     });




  } else {

    (document.getElementById("newprofile") as HTMLElement).style.display ="block" ;
    (document.getElementById("waiting") as HTMLElement).style.display ="none" ;
  
  }

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

createProfile() {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var h = String(today.getHours()).padStart(2, '0');
  var m = String(today.getMinutes()).padStart(2, '0');
  var s = String(today.getSeconds()).padStart(2, '0');
  var time = h + ":" + m + ":" + s + " " + dd + '/' + mm + '/' + yyyy;

  const httpOptions = {
    headers: new HttpHeaders()
  }
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Content-Type', 'application/json');
  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');



  var name = (document.getElementById("iname") as HTMLFormElement)['value']
  var phone = (document.getElementById("iphone") as HTMLFormElement)['value']
  var photo = localStorage.getItem("profile-photoo")


  const pobject =  {
   name: name,
   phone:  phone,
   photo: photo,
   nbrpro: "0",
   score: "0",
   date: time,
}

this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/"+name+"-"+phone+".json",httpOptions).subscribe(responseData => {
  if (responseData != null) {
  console.log(responseData) ;
  (document.getElementById("name") as HTMLElement).innerHTML = '<img src="/assets/img/person.png" width="25" height="25"> &nbsp; ' + name ;
  (document.getElementById("phone") as HTMLElement).innerHTML = '<img src="/assets/img/phone.png" width="20" height="25"> &nbsp; ' + phone ;
      // @ts-ignore
  (document.getElementById("photo") as HTMLElement).innerHTML = '<img src="'+responseData.photo+'" width="150" height="150" style="border-radius: 50%;"> &nbsp; ' ;
   // @ts-ignore
  (document.getElementById("nbrpro") as HTMLElement).innerHTML = '<img src="/assets/img/document-richtext.png" width="25" height="25"> &nbsp; ' + responseData.nbrpro ;
   // @ts-ignore
  (document.getElementById("score") as HTMLElement).innerHTML = '<img src="/assets/img/star.png" width="25" height="25"> &nbsp; ' + responseData.score ;
  (document.getElementById("profile") as HTMLElement).style.display ="block" ;
  (document.getElementById("newprofile") as HTMLElement).style.display ="none" ;

  localStorage.setItem("profile-name",name)
  localStorage.setItem("profile-phone",phone)
   // @ts-ignore
  localStorage.setItem("profile-photo",responseData.photo)
     // @ts-ignore
  localStorage.setItem("profile-nbrpro",responseData.nbrpro)
     // @ts-ignore
  localStorage.setItem("profile-score",responseData.score)
  return;
  } else {
    var x = name

    // @ts-ignore
         while (x.includes(" ")) {
            // @ts-ignore
            x =  x.replace(' ','_');
         }

    this.http.put("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/"+x+"-"+phone+".json",pobject,httpOptions).subscribe(responseData => {
  console.log(responseData);
  localStorage.setItem("profile-name",name)
  localStorage.setItem("profile-phone",phone)
   // @ts-ignore
  localStorage.setItem("profile-photo",photo)
     // @ts-ignore
  localStorage.setItem("profile-nbrpro",0)
     // @ts-ignore
  localStorage.setItem("profile-score",0)
  location.reload();
});

  }
});



}

deconnecter() {
  localStorage.removeItem("profile-name")
  localStorage.removeItem("profile-phone")
  localStorage.removeItem("profile-photo")
  localStorage.removeItem("profile-nbrpro")
  localStorage.removeItem("profile-score")
  location.reload();

}

modifier() {
  (document.getElementById("modprofile") as HTMLElement).style.display ="block" ;
  
}

modifierx() {
  const httpOptions = {
    headers: new HttpHeaders()
  }
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Content-Type', 'application/json');
  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');



  var name = (document.getElementById("mname") as HTMLFormElement)['value']
  var phone = (document.getElementById("mphone") as HTMLFormElement)['value']
  var photo = localStorage.getItem("profile-photoo")


  const pobject =  {
   name: name,
   phone:  phone,
   photo: photo,
   nbrpro: localStorage.getItem("profile-nbrpro"),
   score: localStorage.getItem("profile-score")
}
var x = name

// @ts-ignore
     while (x.includes(" ")) {
        // @ts-ignore
        x =  x.replace(' ','_');
     }

this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/"+x+"-"+phone+".json",httpOptions).subscribe(responseData => {
  if (responseData != null) {
  return;
  } else {
    var x = name

    // @ts-ignore
         while (x.includes(" ")) {
            // @ts-ignore
            x =  x.replace(' ','_');
         }

    this.http.put("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/"+x+"-"+phone+".json",pobject,httpOptions).subscribe(responseData => {
  console.log(responseData);
  localStorage.setItem("profile-name",name)
  localStorage.setItem("profile-phone",phone)
   // @ts-ignore
  localStorage.setItem("profile-photo",photo)
  location.reload();
});

  }
});



}

aboutme() {
  alert("GreenCity est une application Web mobile hybride permettant de signaler les problèmes civils/environnementaux quotidiens ou de les consulter ainsi que d'autres informations. \n\n Développé par : Mohamed Dhia Jebali et Aymen Masmoudi \n Fabriqué à partir de SSS Innovation Startup \n\n Votre version actuelle : v"+ localStorage.getItem("oldversion"))
  
    }

}
