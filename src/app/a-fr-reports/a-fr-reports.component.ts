import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SHA256, enc, x64 } from "crypto-js";

@Component({
  selector: 'app-a-fr-reports',
  templateUrl: './a-fr-reports.component.html',
  styleUrls: ['./a-fr-reports.component.css']
})
export class AFrReportsComponent implements OnInit {

  constructor(private elementRef: ElementRef, private http: HttpClient, private _router: Router) { }

  ngOnInit(): void {

    window.scrollTo(0, 0);
    // @ts-ignore
    document.getElementById("cred").innerHTML = '   <div id="cred" class="text-end">    <img src="/assets/img/person-fill.png" width="25" height="25" style=" float: left;" alt=""> &nbsp;' + localStorage.getItem("adminnom") + '&nbsp;    <img src="/assets/img/location.png" width="20" height="25" class="d-inline-block align-top" alt=""> ' + localStorage.getItem("adminloc") + ' &nbsp; </div>'

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
    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/adminaccounts/" + x + "-" + cpassword + ".json", httpOptions).subscribe(responseData => {
      if (responseData != null) {
        // @ts-ignore
        if (responseData.big == "1") {
          // @ts-ignore
          document.getElementById("aaa").style.display = "block"
        }

      }
    })

    this.getInfo()
    localStorage.setItem("capture", "1");
    localStorage.setItem("picc1", "assets/img/empty.jpg");
    localStorage.setItem("picc2", "assets/img/empty.jpg");
    localStorage.setItem("picc3", "assets/img/empty.jpg");
    localStorage.setItem("picc4", "assets/img/empty.jpg");
    localStorage.setItem("picc5", "assets/img/empty.jpg");
  }

  getInfo() {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var loc = localStorage.getItem("adminloc");

    if (loc != "Tous") {

    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/" + loc + "/.json", httpOptions).subscribe(responseData => {
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

            this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + prof + ".json", httpOptions).subscribe(responseDataa => {

              if (responseDataa != null) {
                // @ts-ignore
                pp = responseDataa.photo
              }

              // @ts-ignore
              document.getElementById("news").insertAdjacentHTML('afterbegin', '  <div id="' + b[0] + 'div" class="card text-white bg-secondary mb-3">    <div class="card-body">      <h5 class="card-title">        <img src="/assets/img/' + b[1].type + '.png" width="40" height="40" style="float: left;" alt="">        &nbsp;&nbsp;' + b[1].title + ' &nbsp;        <img src="' + pp + '" width="60" height="60" style=" float: center; border-radius: 50%" alt=""> ' + b[1].name + ' &nbsp; <img src="/assets/img/phone.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].phone + ' &nbsp;      <img src="/assets/img/calendar.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].date + '   &nbsp; <img src="/assets/img/map.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].location + ' &nbsp; <img src="/assets/img/plus.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].mun + ' &nbsp; <a href="https://maps.google.com/?q=' + b[1].lat + ',' + b[1].lon + '" class="btn btn-outline-light"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a>    <img  id="' + b[0] + 'remove" (click)="remove(' + "'" + b[0] + "'" + ')" src="/assets/img/remove.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="' + b[0] + 'modify" (click)="modify(' + "'" + b[0] + "'" + ')" src="/assets/img/modify.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="' + b[0] + 'approve" (click)="approve(' + "'" + b[0] + "'" + ')" src="/assets/img/accept.png" width="20" height="20" style="float: right;" alt="">      </h5>     <p class="card-text">' + b[1].subject + '</p>          <hr>      <img src="' + b[1].picture1 + '" width="150" height="125">      <img src="' + b[1].picture2 + '" width="150" height="125">      <img src="' + b[1].picture3 + '" width="150" height="125">      <img src="' + b[1].picture4 + '" width="150" height="125">      <img src="' + b[1].picture5 + '" width="150" height="125">    </div>  </div>');
              this.elementRef.nativeElement.querySelector('#' + b[0] + 'approve').addEventListener('click', this.approve.bind(this));
              this.elementRef.nativeElement.querySelector('#' + b[0] + 'modify').addEventListener('click', this.modify.bind(this));
              this.elementRef.nativeElement.querySelector('#' + b[0] + 'remove').addEventListener('click', this.remove.bind(this));

              // @ts-ignore
              document.getElementById("waiting").style.display = "none"




            })
          } else {


            // @ts-ignore
            document.getElementById("news").insertAdjacentHTML('afterbegin', '  <div id="' + b[0] + 'div" class="card text-white bg-secondary mb-3">    <div class="card-body">      <h5 class="card-title">        <img src="/assets/img/' + b[1].type + '.png" width="40" height="40" style="float: left;" alt="">        &nbsp;&nbsp;' + b[1].title + ' &nbsp;        <img src="' + pp + '" width="60" height="60" style=" float: center; border-radius: 50%" alt=""> ' + b[1].name + ' &nbsp; <img src="/assets/img/phone.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].phone + ' &nbsp;      <img src="/assets/img/calendar.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].date + '   &nbsp; <img src="/assets/img/map.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].location + ' &nbsp; <img src="/assets/img/plus.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].mun + '&nbsp; <a href="https://maps.google.com/?q=' + b[1].lat + ',' + b[1].lon + '" class="btn btn-outline-light"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a>     <img  id="' + b[0] + 'remove" (click)="remove(' + "'" + b[0] + "'" + ')" src="/assets/img/remove.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="' + b[0] + 'modify" (click)="modify(' + "'" + b[0] + "'" + ')" src="/assets/img/modify.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="' + b[0] + 'approve" (click)="approve(' + "'" + b[0] + "'" + ')" src="/assets/img/accept.png" width="20" height="20" style="float: right;" alt="">      </h5>    <p class="card-text">' + b[1].subject + '</p>       <hr>      <img src="' + b[1].picture1 + '" width="150" height="125">      <img src="' + b[1].picture2 + '" width="150" height="125">      <img src="' + b[1].picture3 + '" width="150" height="125">      <img src="' + b[1].picture4 + '" width="150" height="125">      <img src="' + b[1].picture5 + '" width="150" height="125">    </div>  </div>');
            this.elementRef.nativeElement.querySelector('#' + b[0] + 'approve').addEventListener('click', this.approve.bind(this));
            this.elementRef.nativeElement.querySelector('#' + b[0] + 'modify').addEventListener('click', this.modify.bind(this));
            this.elementRef.nativeElement.querySelector('#' + b[0] + 'remove').addEventListener('click', this.remove.bind(this));


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



    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/.json", httpOptions).subscribe(responseData => {
      if (responseData != null) {

        var pp = "assets/img/person-fill.png"
        var c = {};

        Object.entries(responseData).map(a => {
        Object.entries(a[1]).map(b => {

          // @ts-ignore
          if (b[1].name != "Anonyme") {
            // @ts-ignore
          var prof = b[1].name  ;
          while (prof.includes(" ")) {
             prof =  prof.replace(' ','_');

          }
              // @ts-ignore
            prof = prof + '-' + b[1].phone

            this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + prof + ".json", httpOptions).subscribe(responseDataa => {

              if (responseDataa != null) {
                // @ts-ignore
                pp = responseDataa.photo
              }

                  // @ts-ignore
                  var dam = b[1].location
                  dam = dam.replace(' ', '_');

              // @ts-ignore
              document.getElementById("news").insertAdjacentHTML('beforeend', '  <div id="' + b[0] + 'div" class="card text-white bg-secondary mb-3">    <div class="card-body">      <h5 class="card-title">        <img src="/assets/img/' + b[1].type + '.png" width="40" height="40" style="float: left;" alt="">        &nbsp;&nbsp;' + b[1].title + ' &nbsp;        <img src="' + pp + '" width="60" height="60" style=" float: center; border-radius: 50%" alt=""> ' + b[1].name + ' &nbsp; <img src="/assets/img/phone.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].phone + ' &nbsp;      <img src="/assets/img/calendar.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].date + '   &nbsp; <img src="/assets/img/map.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].location + ' &nbsp; <img src="/assets/img/plus.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].mun + ' &nbsp; <a href="https://maps.google.com/?q=' + b[1].lat + ',' + b[1].lon + '" class="btn btn-outline-light"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a>    <img  id="' + b[0] + 'remove__' + dam + '" (click)="remove(' + "'" + b[0] + "'" + ')" src="/assets/img/remove.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="' + b[0] + 'modify__' + dam + '" (click)="modify(' + "'" + b[0] + "'" + ')" src="/assets/img/modify.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="' + b[0] + 'approve__' + dam + '" (click)="approve(' + "'" + b[0] + "'" + ')" src="/assets/img/accept.png" width="20" height="20" style="float: right;" alt="">      </h5>      <p class="card-text">' + b[1].subject + '</p>         <hr>      <img src="' + b[1].picture1 + '" width="150" height="125">      <img src="' + b[1].picture2 + '" width="150" height="125">      <img src="' + b[1].picture3 + '" width="150" height="125">      <img src="' + b[1].picture4 + '" width="150" height="125">      <img src="' + b[1].picture5 + '" width="150" height="125">    </div>  </div>');
        

              this.elementRef.nativeElement.querySelector('#' + b[0] + 'approve__' + dam).addEventListener('click', this.approve.bind(this));
      
              this.elementRef.nativeElement.querySelector('#' + b[0] + 'modify__'  + dam).addEventListener('click', this.modify.bind(this));
      
              this.elementRef.nativeElement.querySelector('#' + b[0] + 'remove__'  + dam).addEventListener('click', this.remove.bind(this));

              // @ts-ignore
              document.getElementById("waiting").style.display = "none"




            })
          } else {

                          // @ts-ignore
                          var dam = b[1].location
                          dam = dam.replace(' ', '_');


            // @ts-ignore
            document.getElementById("news").insertAdjacentHTML('beforeend', '  <div id="' + b[0] + 'div" class="card text-white bg-secondary mb-3">    <div class="card-body">      <h5 class="card-title">        <img src="/assets/img/' + b[1].type + '.png" width="40" height="40" style="float: left;" alt="">        &nbsp;&nbsp;' + b[1].title + ' &nbsp;        <img src="' + pp + '" width="60" height="60" style=" float: center; border-radius: 50%" alt=""> ' + b[1].name + ' &nbsp; <img src="/assets/img/phone.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].phone + ' &nbsp;      <img src="/assets/img/calendar.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].date + '   &nbsp; <img src="/assets/img/map.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].location + ' &nbsp; <img src="/assets/img/plus.png" width="20" height="20" style=" float: center;" alt=""> ' + b[1].mun + '&nbsp; <a href="https://maps.google.com/?q=' + b[1].lat + ',' + b[1].lon + '" class="btn btn-outline-light"><img src="/assets/img/geo.png" width="13" height="18" style=" float: center;"> Position</a>     <img  id="' + b[0] + 'remove__' + dam + '" (click)="remove(' + "'" + b[0] + "'" + ')" src="/assets/img/remove.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="' + b[0] + 'modify__' + dam + '" (click)="modify(' + "'" + b[0] + "'" + ')" src="/assets/img/modify.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="' + b[0] + 'approve__' + dam + '" (click)="approve(' + "'" + b[0] + "'" + ')" src="/assets/img/accept.png" width="20" height="20" style="float: right;" alt="">      </h5>    <p class="card-text">' + b[1].subject + '</p>        <hr>      <img src="' + b[1].picture1 + '" width="150" height="125">      <img src="' + b[1].picture2 + '" width="150" height="125">      <img src="' + b[1].picture3 + '" width="150" height="125">      <img src="' + b[1].picture4 + '" width="150" height="125">      <img src="' + b[1].picture5 + '" width="150" height="125">    </div>  </div>');
            this.elementRef.nativeElement.querySelector('#' + b[0] + 'approve__' + dam).addEventListener('click', this.approve.bind(this));
      
            this.elementRef.nativeElement.querySelector('#' + b[0] + 'modify__'  + dam).addEventListener('click', this.modify.bind(this));
    
            this.elementRef.nativeElement.querySelector('#' + b[0] + 'remove__'  + dam).addEventListener('click', this.remove.bind(this));


            // @ts-ignore
            document.getElementById("waiting").style.display = "none"

          }




        })
      })
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
  approve(str) {

    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var loc = localStorage.getItem("adminloc");
    var typ = localStorage.getItem("admintyp");

    if (typeof str == "object") {
      var x = str.srcElement.id
    } else {
      x = str
    }

if (loc == "Tous") {
  var a = x.indexOf("__") 
  var b = x.length 
  var c = x.substring(a + 2, b);
  var d = c.replace('_', ' ');
  loc = d
  x = x.substring(0, a);

}

    x = x.replace('approve', '');
    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/" + loc + "/" + x + ".json", httpOptions).subscribe(responseData => {

      this.http.put("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/approved/" + loc + "/" + x + ".json", responseData, httpOptions).subscribe(responseData => {

        this.http.delete("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/" + loc + "/" + x + ".json", httpOptions).subscribe(responseData => {
          alert("Le problème a été approuvé !")
          location.reload();


        })

      })





        ;
    })

  }

  // @ts-ignore
  remove(str) {

    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var loc = localStorage.getItem("adminloc");
    var typ = localStorage.getItem("admintyp");

    if (typeof str == "object") {
      var x = str.srcElement.id
    } else {
      x = str
    }

    
if (loc == "Tous") {
  var a = x.indexOf("__") 
  var b = x.length 
  var c = x.substring(a + 2, b);
  var d = c.replace('_', ' ');
  loc = d
  x = x.substring(0, a);
}

    x = x.replace('remove', '');
    this.http.delete("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/" + loc + "/" + x + ".json", httpOptions).subscribe(responseData => {

      alert("Le problème a été supprimé !")
      location.reload();
    })
  }

  // @ts-ignore
  modify(str) {

    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var loc = localStorage.getItem("adminloc");
    var typ = localStorage.getItem("admintyp");

    if (typeof str == "object") {
      var x = str.srcElement.id
    } else {
      x = str
    }

    
if (loc == "Tous") {
  var a = x.indexOf("__") 
  var b = x.length 
  var c = x.substring(a + 2, b);
  var d = c.replace('_', ' ');
  loc = d
  x = x.substring(0, a);
}

alert(x)

    x = x.replace('modify', '');
    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/" + loc + "/" + x + ".json", httpOptions).subscribe(responseData => {

      // @ts-ignore
      document.getElementById(x + "div").insertAdjacentHTML('beforeend', ' <div class="card text-white bg-secondary mb-3">    <div class="card-body">      <h5 class="card-title">        <label for="' + x + 'titlex">Title</label>        <input type="text" class="form-control" id="' + x + 'titlex" value="' + responseData.title + '">        <label for="' + x + 'subjectx">Subject</label>        <textarea  type="textarea" class="form-control" id="' + x + 'subjectx" rows="3">' + responseData.subject + '</textarea>                <label for="' + x + 'typex">Type</label>      <select id="' + x + 'typex" class="form-control">        <option selected  value="' + responseData.type + '">' + responseData.type + '</option>        <option value="type_domestic">Domestique</option>        <option value="type_medical">Médical</option>        <option value="type_chemical">Chémique</option>        <option value="type_toxic">Toxique</option>        <option value="type_brokenroad">Route Cassée</option>        <option value="type_obstacleroad">R.Obstacle</option>        <option value="type_train">Train Panne</option>      </select>      <br>      Nouvelles Images      <br>   <br>      <button  id="' + x + 'picupload" (click)="picupload(' + "'" + x + "'" + ')" type="file" accept="image/*" class="btn btn-success">        <img src="/assets/img/arrow-bar-up.png" width="30" height="25" style="filter: invert(1); float: left;"          alt="">&nbsp; Télecharger</button>          <br>   <br>      <div class=" row">          <div class="col" style="background-color: aliceblue;" id="pic1">&nbsp;</div>&nbsp;          <div class="col" style="background-color: aliceblue;" id="pic2">&nbsp;</div>&nbsp;          <div class="col" style="background-color: aliceblue;" id="pic3">&nbsp;</div>&nbsp;          <div class="col" style="background-color: aliceblue;" id="pic4">&nbsp;</div>&nbsp;          <div class="col" style="background-color: aliceblue;" id="pic5">&nbsp;</div>      </div>      <br>      Images Actuelles      <br>      <br>      <img src="' + responseData.picture1 + '" width="150" height="125"> &nbsp;      <img src="' + responseData.picture2 + '" width="150" height="125"> &nbsp;      <img src="' + responseData.picture3 + '" width="150" height="125"> &nbsp;      <img src="' + responseData.picture4 + '" width="150" height="125"> &nbsp;      <img src="' + responseData.picture5 + '" width="150" height="125">      </h5> &nbsp;<br>      <button id="' + x + 'modifyx" (click)="modifyx(' + "'" + x + "'" + ')" type="file"  accept="image/*" class="btn text-end btn-warning">        <img src="/assets/img/arrow-bar-up.png" width="30" height="25" style="filter: invert(1); float: left;"          alt="">&nbsp; Modifier</button>    </div>  </div>');
      this.elementRef.nativeElement.querySelector('#' + x + 'modifyx').addEventListener('click', this.modifyx.bind(this));
      this.elementRef.nativeElement.querySelector('#' + x + 'picupload').addEventListener('click', this.picupload.bind(this));

      ;
    })

  }
  // @ts-ignore
  modifyx(str) {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var loc = localStorage.getItem("adminloc");
    var typ = localStorage.getItem("admintyp");

    if (typeof str == "object") {
      var x = str.srcElement.id
    } else {
      x = str
    }

  

    x = x.replace('modifyx', '');

    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/" + loc + "/" + x + ".json", httpOptions).subscribe(responseData => {

      const object = {
        title: (document.getElementById(x + "titlex") as HTMLFormElement)['value'],
        subject: (document.getElementById(x + "subjectx") as HTMLFormElement)['value'],
        // @ts-ignore
        location: responseData.location,
        // @ts-ignore
        mun: responseData.mun,
        // @ts-ignore
        lat: responseData.lat,
        // @ts-ignore
        lon: responseData.lon,
        type: (document.getElementById(x + "typex") as HTMLFormElement)['value'],
        // @ts-ignore
        name: responseData.name,
        // @ts-ignore
        phone: responseData.phone,
        // @ts-ignore
        date: responseData.date,
        picture1: localStorage.getItem("picc1"),
        picture2: localStorage.getItem("picc2"),
        picture3: localStorage.getItem("picc3"),
        picture4: localStorage.getItem("picc4"),
        picture5: localStorage.getItem("picc5"),
      }

      this.http.put("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/" + loc + "/" + x + ".json", object, httpOptions).subscribe(responseDataa => {
        alert("Le problème a été modifié !")
        location.reload();
      })


    })



  }

  // @ts-ignore
  picupload(str) {


    if (localStorage.getItem("capture") == "5") {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
        let files = Array.from(input.files as unknown as HTMLFormElement);
        var loadFile = function (_event: any) {
          var reader = new FileReader();
          reader.onload = function () {
            let x = document.createElement('img')
            x.id = "p5";
            x.style.width = "207px";
            x.style.height = "210px";

            (document.getElementById('pic5') as HTMLFormElement).appendChild(x);
            var output = document.getElementById('p5');

            (output as HTMLFormElement)['src'] = reader.result;
            // @ts-ignore
            localStorage.setItem("picc5", reader.result);
          };
          reader.readAsDataURL(_event.target.files[0]);
        };
        loadFile(event);
      };
      input.click();
    }

    if (localStorage.getItem("capture") == "4") {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
        let files = Array.from(input.files as unknown as HTMLFormElement);
        var loadFile = function (_event: any) {
          var reader = new FileReader();
          reader.onload = function () {
            let x = document.createElement('img')
            x.id = "p4";
            x.style.width = "207px";
            x.style.height = "210px";
            (document.getElementById('pic4') as HTMLFormElement).appendChild(x);
            var output = document.getElementById('p4');

            (output as HTMLFormElement)['src'] = reader.result;
            // @ts-ignore
            localStorage.setItem("picc4", reader.result);
          };
          reader.readAsDataURL(_event.target.files[0]);
        };
        loadFile(event);
      };
      input.click();
      localStorage.setItem("capture", "5");
    }





    if (localStorage.getItem("capture") == "3") {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
        let files = Array.from(input.files as unknown as HTMLFormElement);
        var loadFile = function (_event: any) {
          var reader = new FileReader();
          reader.onload = function () {
            let x = document.createElement('img')
            x.id = "p3";
            x.style.width = "207px";
            x.style.height = "210px";
            (document.getElementById('pic3') as HTMLFormElement).appendChild(x);
            var output = document.getElementById('p3');

            (output as HTMLFormElement)['src'] = reader.result;
            // @ts-ignore
            localStorage.setItem("picc3", reader.result);
          };
          reader.readAsDataURL(_event.target.files[0]);
        };
        loadFile(event);
      };
      input.click();
      localStorage.setItem("capture", "4");
    }


    if (localStorage.getItem("capture") == "2") {

      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
        let files = Array.from(input.files as unknown as HTMLFormElement);
        var loadFile = function (_event: any) {
          var reader = new FileReader();
          reader.onload = function () {
            let x = document.createElement('img')
            x.id = "p2";
            x.style.width = "207px";
            x.style.height = "210px";
            (document.getElementById('pic2') as HTMLFormElement).appendChild(x);
            var output = document.getElementById('p2');

            (output as HTMLFormElement)['src'] = reader.result;
            // @ts-ignore
            localStorage.setItem("picc2", reader.result);
          };
          reader.readAsDataURL(_event.target.files[0]);
        };
        loadFile(event);
      };
      input.click();
      localStorage.setItem("capture", "3");
    }


    if (localStorage.getItem("capture") == "1") {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
        let files = Array.from(input.files as unknown as HTMLFormElement);
        var loadFile = function (_event: any) {
          var reader = new FileReader();
          reader.onload = function () {
            let x = document.createElement('img')
            x.id = "p1";
            x.style.width = "207px";
            x.style.height = "210px";
            (document.getElementById('pic1') as HTMLFormElement).appendChild(x);
            var output = document.getElementById('p1');

            (output as HTMLFormElement)['src'] = reader.result;
            // @ts-ignore
            localStorage.setItem("picc1", reader.result);
          };
          reader.readAsDataURL(_event.target.files[0]);





        };
        loadFile(event);

      };
      input.click();
      localStorage.setItem("capture", "2");

    }


  }

  deconnecter() {
    localStorage.removeItem("adminnom")
    localStorage.removeItem("adminloc")
    localStorage.removeItem("adminp")
    this._router.navigate(['/a-fr-home']);

  }

  aboutme() {

  }

}


