import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async, delay } from 'rxjs';



@Component({
  selector: 'app-fr-news',
  templateUrl: './fr-news.component.html',
  styleUrls: ['./fr-news.component.css']
})

export class FrNewsComponent implements OnInit {
  newsload = '';
  public isCollapsed = true;
  constructor(private elementRef: ElementRef, private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.getlocation()
    this.getInfo()
  }


       // @ts-ignore
       async getItem(loc,it) {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


    await new Promise<any>(resolve =>  this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/approved/" + loc + "/" + it+ ".json", httpOptions).subscribe(responseData => {




      var pp = "assets/img/person-fill.png"

      // @ts-ignore
      if (responseData.name != "Anonyme") {
        // @ts-ignore
        var prof = responseData.name;
        while (prof.includes(" ")) {
          prof = prof.replace(' ', '_');

        }
        // @ts-ignore
        prof = prof + '-' + responseData.phone

   
              this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + prof + ".json", httpOptions).subscribe(responseDataa => {



          if (responseDataa != null) {
            // @ts-ignore
            pp = responseDataa.photo;
          }

          // @ts-ignore
          document.getElementById("news").insertAdjacentHTML('beforebegin', '      <div class="shadow card bg-light rounded">      <table class="">        <thead>          <tr>            <td class="" style="width: 60px;" rowspan="2"> <img class="text-end" src="' + pp + '"     style="border-radius: 50%"        width="50" height="50"> </td>            <td class="">' + responseData.name + '</td>          </tr>          <tr>            <td class=""><img src="/assets/img/calendar.png" width="18" height="18" style=" float: center;"                alt="">&nbsp; ' + responseData.date + ' </td>          </tr>        </thead>      </table>            <img id="' + it + 'btn" (click)="collapse(' + "'" + it + "'" + ')" class="card-img-top" src="' + responseData.picture1 + '" style="max-height: 265px;"        alt="Card image cap">      <div class="card">        <div id="' + responseData + '" style="display:none" class="">                  <table>            <tr>              <td> <img src="' + responseData.picture2 + '" width="180" height="150"> </td>              <td> <img src="' + responseData.picture3 + '" width="180" height="150"> </td>            </tr>            <tr>              <td> <img src="' + responseData.picture4 + '" width="180" height="150"> </td>              <td> <img src="' + responseData.picture5 + '" width="180" height="150"> </td>            </tr>          </table>        </div>      </div>      <div>   <h5> &nbsp;' + responseData.title + '</h5>   ' + responseData.subject + '     </div>        <table><thead>  <tr>    <td class="tg-0lax" rowspan="2">&nbsp; &nbsp; <img src="/assets/img/' + responseData.type + '.png" width="45" height="45" style=" float: center;"></td>    <td class="tg-0lax" rowspan="2"><a href="https://maps.google.com/?q=' + responseData.lat + ',' + responseData.lon + '" class="btn btn-outline-dark"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a></td>    <td class="tg-0lax"><img src="/assets/img/map.png" width="18" height="18" style=" float: center;"> ' + responseData.location + '</td>  </tr>  <tr>    <td class="tg-0lax"><img src="/assets/img/location.png" width="18" height="18" style=" float: center;">&nbsp;' + responseData.mun + '</td>  </tr></thead></table>   </div>');
          this.elementRef.nativeElement.querySelector('#' + it + 'btn').addEventListener('click', this.collapse.bind(this));
   

          // @ts-ignore
        })
      } else {


        // @ts-ignore
        document.getElementById("news").insertAdjacentHTML('beforebegin', '      <div class="shadow card bg-light rounded">      <table class="">        <thead>          <tr>            <td class="" style="width: 60px;" rowspan="2"> <img class="text-end" src="' + pp + '"     style="border-radius: 50%"        width="50" height="50"> </td>            <td class="">' + responseData.name + '</td>          </tr>          <tr>            <td class=""><img src="/assets/img/calendar.png" width="18" height="18" style=" float: center;"                alt="">&nbsp; ' + responseData.date + ' </td>          </tr>        </thead>      </table>            <img id="' + it + 'btn" (click)="collapse(' + "'" + it + "'" + ')" class="card-img-top" src="' + responseData.picture1 + '" style="max-height: 265px;"        alt="Card image cap">      <div class="card">        <div id="' + responseData + '" style="display:none" class="">                  <table>            <tr>              <td> <img src="' + responseData.picture2 + '" width="180" height="150"> </td>              <td> <img src="' + responseData.picture3 + '" width="180" height="150"> </td>            </tr>            <tr>              <td> <img src="' + responseData.picture4 + '" width="180" height="150"> </td>              <td> <img src="' + responseData.picture5 + '" width="180" height="150"> </td>            </tr>          </table>        </div>      </div>      <div>   <h5> &nbsp;' + responseData.title + '</h5>   ' + responseData.subject + '     </div>        <table><thead>  <tr>    <td class="tg-0lax" rowspan="2">&nbsp; &nbsp; <img src="/assets/img/' + responseData.type + '.png" width="45" height="45" style=" float: center;"></td>    <td class="tg-0lax" rowspan="2"><a href="https://maps.google.com/?q=' + responseData.lat + ',' + responseData.lon + '" class="btn btn-outline-dark"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a></td>    <td class="tg-0lax"><img src="/assets/img/map.png" width="18" height="18" style=" float: center;"> ' + responseData.location + '</td>  </tr>  <tr>    <td class="tg-0lax"><img src="/assets/img/location.png" width="18" height="18" style=" float: center;">&nbsp;' + responseData.mun + '</td>  </tr></thead></table>   </div>');
        this.elementRef.nativeElement.querySelector('#' + it + 'btn').addEventListener('click', this.collapse.bind(this));



      }




    }))



  }

  getInfo() {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var loc = localStorage.getItem("currentpos");





    if (localStorage.getItem("locmode") != "all") {

          /**

      this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/index/problems/" + loc + "/objects.json", httpOptions).subscribe(async responseDataa => {
        if (responseDataa != null) {

          // @ts-ignore
          var list = responseDataa.list
          var ex = list.split(",")
          var i = 0;
          do {

             this.getItem(loc,ex[i])

    

            i++
          } while (i != ex.length)


        }
        // @ts-ignore
        document.getElementById("waiting").style.display = "none"
      })
**/

  
      

    this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/approved/" + loc + ".json", httpOptions).subscribe(responseData => {
      if (responseData != null) {


        var pp = "assets/img/person-fill.png"
        var c = {};

        Object.entries(responseData).map(b => {



        // @ts-ignore
        if (b[1].name != "Anonyme") {
          // @ts-ignore
        var prof = b[1].name  ;
        while (prof.includes(" ")) {
           prof =  prof.replace(' ','_');

        }
            // @ts-ignore
          prof = prof + '-' + b[1].phone

            this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + prof + ".json", httpOptions).subscribe(responseDataa => {



              if (responseDataa != null) {
                // @ts-ignore
                pp = responseDataa.photo
              }

              // @ts-ignore
              document.getElementById("news").insertAdjacentHTML('afterend', '      <div class="shadow card bg-light rounded">      <table class="">        <thead>          <tr>            <td class="" style="width: 60px;" rowspan="2"> <img class="text-end" src="' + pp + '"     style="border-radius: 50%"        width="50" height="50"> </td>            <td class="">' + b[1].name + '</td>          </tr>          <tr>            <td class=""><img src="/assets/img/calendar.png" width="18" height="18" style=" float: center;"                alt="">&nbsp; ' + b[1].date + ' </td>          </tr>        </thead>      </table>            <img id="' + b[0] + 'btn" (click)="collapse(' + "'" + b[0] + "'" + ')" class="card-img-top" src="' + b[1].picture1 + '" style="max-height: 265px;"        alt="Card image cap">      <div class="card">        <div id="' + b[0] + '" style="display:none" class="">                  <table>            <tr>              <td> <img src="' + b[1].picture2 + '" width="180" height="150"> </td>              <td> <img src="' + b[1].picture3 + '" width="180" height="150"> </td>            </tr>            <tr>              <td> <img src="' + b[1].picture4 + '" width="180" height="150"> </td>              <td> <img src="' + b[1].picture5 + '" width="180" height="150"> </td>            </tr>          </table>        </div>      </div>      <div>   <h5> &nbsp;' + b[1].title + '</h5>   ' + b[1].subject + '     </div>        <table><thead>  <tr>    <td class="tg-0lax" rowspan="2">&nbsp; &nbsp; <img src="/assets/img/' + b[1].type + '.png" width="45" height="45" style=" float: center;"></td>    <td class="tg-0lax" rowspan="2"><a href="https://maps.google.com/?q=' + b[1].lat + ',' + b[1].lon + '" class="btn btn-outline-dark"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a></td>    <td class="tg-0lax"><img src="/assets/img/map.png" width="18" height="18" style=" float: center;"> ' + b[1].location + '</td>  </tr>  <tr>    <td class="tg-0lax"><img src="/assets/img/location.png" width="18" height="18" style=" float: center;">&nbsp;' + b[1].mun + '</td>  </tr></thead></table>   </div>');
              this.elementRef.nativeElement.querySelector('#' + b[0] + 'btn').addEventListener('click', this.collapse.bind(this));

              // @ts-ignore
              document.getElementById("waiting").style.display = "none"


            })
          } else {


            // @ts-ignore
            document.getElementById("news").insertAdjacentHTML('afterend', '      <div class="shadow card bg-light rounded">      <table class="">        <thead>          <tr>            <td class="" style="width: 60px;" rowspan="2"> <img class="text-end" src="' + pp + '"     style="border-radius: 50%"        width="50" height="50"> </td>            <td class="">' + b[1].name + '</td>          </tr>          <tr>            <td class=""><img src="/assets/img/calendar.png" width="18" height="18" style=" float: center;"                alt="">&nbsp; ' + b[1].date + ' </td>          </tr>        </thead>      </table>            <img id="' + b[0] + 'btn" (click)="collapse(' + "'" + b[0] + "'" + ')" class="card-img-top" src="' + b[1].picture1 + '" style="max-height: 265px;"        alt="Card image cap">      <div class="card">        <div id="' + b[0] + '" style="display:none" class="">             <table>            <tr>              <td> <img src="' + b[1].picture2 + '" width="180" height="150"> </td>              <td> <img src="' + b[1].picture3 + '" width="180" height="150"> </td>            </tr>            <tr>              <td> <img src="' + b[1].picture4 + '" width="180" height="150"> </td>              <td> <img src="' + b[1].picture5 + '" width="180" height="150"> </td>            </tr>          </table>        </div>      </div>      <div>   <h5> &nbsp;' + b[1].title + '</h5>   ' + b[1].subject + '     </div>        <table><thead>  <tr>    <td class="tg-0lax" rowspan="2">&nbsp; &nbsp; <img src="/assets/img/' + b[1].type + '.png" width="45" height="45" style=" float: center;"></td>    <td class="tg-0lax" rowspan="2"><a href="https://maps.google.com/?q=' + b[1].lat + ',' + b[1].lon + '" class="btn btn-outline-dark"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a></td>    <td class="tg-0lax"><img src="/assets/img/map.png" width="18" height="18" style=" float: center;"> ' + b[1].location + '</td>  </tr>  <tr>    <td class="tg-0lax"><img src="/assets/img/location.png" width="18" height="18" style=" float: center;">&nbsp;' + b[1].mun + '</td>  </tr></thead></table>   </div>');
            this.elementRef.nativeElement.querySelector('#' + b[0] + 'btn').addEventListener('click', this.collapse.bind(this));

            // @ts-ignore
            document.getElementById("waiting").style.display = "none"

          }





        })
      } else {
        // @ts-ignore
        document.getElementById("waiting").style.display = "none"
        // @ts-ignore
        document.getElementById("nodata").style.display = "block"
      }
    });

    } else {

      this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/approved/.json", httpOptions).subscribe(responseData => {
        if (responseData != null) {

          var pp = "assets/img/person-fill.png"
          var c = {};

          Object.entries(responseData).map(a => {
            Object.entries(a[1]).map(b => {


              // @ts-ignore
              if (b[1].name != "Anonyme") {
                // @ts-ignore
                var prof = b[1].name;
                while (prof.includes(" ")) {
                  prof = prof.replace(' ', '_');

                }
                // @ts-ignore
                prof = prof + '-' + b[1].phone

                this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + prof + ".json", httpOptions).subscribe(responseDataa => {



                  if (responseDataa != null) {
                    // @ts-ignore
                    pp = responseDataa.photo
                  }

                  // @ts-ignore
                  document.getElementById("news").insertAdjacentHTML('afterend', '      <div class="shadow card bg-light rounded">      <table class="">        <thead>          <tr>            <td class="" style="width: 60px;" rowspan="2"> <img class="text-end" src="' + pp + '"     style="border-radius: 50%"        width="50" height="50"> </td>            <td class="">' + b[1].name + '</td>          </tr>          <tr>            <td class=""><img src="/assets/img/calendar.png" width="18" height="18" style=" float: center;"                alt="">&nbsp; ' + b[1].date + ' </td>          </tr>        </thead>      </table>            <img id="' + b[0] + 'btn" (click)="collapse(' + "'" + b[0] + "'" + ')" class="card-img-top" src="' + b[1].picture1 + '" style="max-height: 265px;"        alt="Card image cap">      <div class="card">        <div id="' + b[0] + '" style="display:none" class="">       <table>            <tr>              <td> <img src="' + b[1].picture2 + '" width="180" height="150"> </td>              <td> <img src="' + b[1].picture3 + '" width="180" height="150"> </td>            </tr>            <tr>              <td> <img src="' + b[1].picture4 + '" width="180" height="150"> </td>              <td> <img src="' + b[1].picture5 + '" width="180" height="150"> </td>            </tr>          </table>        </div>      </div>      <div>   <h5> &nbsp;' + b[1].title + '</h5>   ' + b[1].subject + '     </div>        <table><thead>  <tr>    <td class="tg-0lax" rowspan="2">&nbsp; &nbsp; <img src="/assets/img/' + b[1].type + '.png" width="45" height="45" style=" float: center;"></td>    <td class="tg-0lax" rowspan="2"><a href="https://maps.google.com/?q=' + b[1].lat + ',' + b[1].lon + '" class="btn btn-outline-dark"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a></td>    <td class="tg-0lax"><img src="/assets/img/map.png" width="18" height="18" style=" float: center;"> ' + b[1].location + '</td>  </tr>  <tr>    <td class="tg-0lax"><img src="/assets/img/location.png" width="18" height="18" style=" float: center;">&nbsp;' + b[1].mun + '</td>  </tr></thead></table>   </div>');
                  this.elementRef.nativeElement.querySelector('#' + b[0] + 'btn').addEventListener('click', this.collapse.bind(this));


                  // @ts-ignore
                  document.getElementById("waiting").style.display = "none"


                })
              } else {


                // @ts-ignore
                document.getElementById("news").insertAdjacentHTML('afterend', '      <div class="shadow card bg-light rounded">      <table class="">        <thead>          <tr>            <td class="" style="width: 60px;" rowspan="2"> <img class="text-end" src="' + pp + '"     style="border-radius: 50%"        width="50" height="50"> </td>            <td class="">' + b[1].name + '</td>          </tr>          <tr>            <td class=""><img src="/assets/img/calendar.png" width="18" height="18" style=" float: center;"                alt="">&nbsp; ' + b[1].date + ' </td>          </tr>        </thead>      </table>            <img id="' + b[0] + 'btn" (click)="collapse(' + "'" + b[0] + "'" + ')" class="card-img-top" src="' + b[1].picture1 + '" style="max-height: 265px;"        alt="Card image cap">      <div class="card">        <div id="' + b[0] + '" style="display:none" class="">            <table>            <tr>              <td> <img src="' + b[1].picture2 + '" width="180" height="150"> </td>              <td> <img src="' + b[1].picture3 + '" width="180" height="150"> </td>            </tr>            <tr>              <td> <img src="' + b[1].picture4 + '" width="180" height="150"> </td>              <td> <img src="' + b[1].picture5 + '" width="180" height="150"> </td>            </tr>          </table>        </div>      </div>      <div>   <h5> &nbsp;' + b[1].title + '</h5>   ' + b[1].subject + '     </div>        <table><thead>  <tr>    <td class="tg-0lax" rowspan="2">&nbsp; &nbsp; <img src="/assets/img/' + b[1].type + '.png" width="45" height="45" style=" float: center;"></td>    <td class="tg-0lax" rowspan="2"><a href="https://maps.google.com/?q=' + b[1].lat + ',' + b[1].lon + '" class="btn btn-outline-dark"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a></td>    <td class="tg-0lax"><img src="/assets/img/map.png" width="18" height="18" style=" float: center;"> ' + b[1].location + '</td>  </tr>  <tr>    <td class="tg-0lax"><img src="/assets/img/location.png" width="18" height="18" style=" float: center;">&nbsp;' + b[1].mun + '</td>  </tr></thead></table>   </div>');
                this.elementRef.nativeElement.querySelector('#' + b[0] + 'btn').addEventListener('click', this.collapse.bind(this));

                // @ts-ignore
                document.getElementById("waiting").style.display = "none"

              }


            });
          });

        } else {
          // @ts-ignore
          document.getElementById("waiting").style.display = "none"
          // @ts-ignore
          document.getElementById("nodata").style.display = "block"
        }
      });


    }
  }
  // @ts-ignore
  collapse(str) {

    if (typeof str == "object") {
      var x = str.srcElement.id
    } else {
      x = str
    }

    x = x.replace('btn', '');
    // @ts-ignore
    if (document.getElementById(x).style.display == "none") {
      // @ts-ignore
      document.getElementById(x).style.display = "block"
    } else {
      // @ts-ignore
      document.getElementById(x).style.display = "none"
    }


  }

  getlocation() {

    if (localStorage.getItem("locmode") == "auto") {
      var locs = [{ city: "Tunis", lat: 33.8439408, lng: 9.400138 }, { city: "Sfax", lat: 34.739739, lng: 10.7598516 }, { city: "Sousse", lat: 35.828829, lng: 10.640525 }, { city: "Kairouan", lat: 35.6775263, lng: 10.1006205 }, { city: "Kebili", lat: 33.7058066, lng: 8.9705891 }, { city: "Bizerte", lat: 37.2732415, lng: 9.8713665 }, { city: "Sidi Bouzid", lat: 34.881181, lng: 9.52635984718234 }, { city: "Gabes", lat: 33.8833922, lng: 10.0971389 }, { city: "Ariana", lat: 36.859939, lng: 10.190973 }, { city: "Jendouba", lat: 36.5013895, lng: 8.7811635 }, { city: "Gafsa", lat: 34.425149, lng: 8.786218 }, { city: "Beja", lat: 36.7270373, lng: 9.1814915 }, { city: "Kasserine", lat: 35.1691517, lng: 8.8364635 }, { city: "Monastir", lat: 35.7398399, lng: 10.7986953383714 }, { city: "Tataouine", lat: 32.929216, lng: 10.451229 }, { city: "Ben Arous", lat: 36.7488603, lng: 10.22460082 }, { city: "Mahdia", lat: 35.48810105, lng: 10.9626808407717 }, { city: "El Kef", lat: 36.1675068, lng: 8.7043493 }, { city: "Nabeul", lat: 36.4823676, lng: 10.6707196978804 }, { city: "Manouba", lat: 36.8115973, lng: 10.0857631871932 }, { city: "Tozeur", lat: 33.913485, lng: 8.11182407105263 }, { city: "Zaghouan", lat: 36.41171955, lng: 10.2019797844446 }, { city: "Medenine", lat: 33.339592, lng: 10.491185 }, { city: "Siliana", lat: 36.085041, lng: 9.369468 }]
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
    var t = document.getElementById("navman").value;
    localStorage.setItem("currentpos", t)
    location.reload();
  }

  navselectauto() {
    localStorage.setItem("locmode", "auto");
    location.reload();
  }

  aboutme() {
    alert("GreenCity est une application Web mobile hybride permettant de signaler les problèmes civils/environnementaux quotidiens ou de les consulter ainsi que d'autres informations. \n\n Développé par : Mohamed Dhia Jebali et Aymen Masmoudi \n Fabriqué à partir de SSS Innovation Startup \n\n Votre version actuelle : v" + localStorage.getItem("oldversion"))

  }

}
