import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SHA256, enc, x64 } from "crypto-js";


@Component({
  selector: 'app-a-fr-accounts',
  templateUrl: './a-fr-accounts.component.html',
  styleUrls: ['./a-fr-accounts.component.css']
})
export class AFrAccountsComponent implements OnInit {

  constructor(private elementRef: ElementRef, private http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

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


        // @ts-ignore
    document.getElementById("cred").innerHTML = '   <div id="cred" class="text-end">    <img src="/assets/img/person-fill.png" width="25" height="25" style=" float: left;" alt=""> &nbsp;'+localStorage.getItem("adminnom")+'&nbsp;    <img src="/assets/img/location.png" width="20" height="25" class="d-inline-block align-top" alt=""> '+localStorage.getItem("adminloc")+' &nbsp; </div>' 
    this.getInfo()
  }

  getInfo() {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    


    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/.json",httpOptions).subscribe(responseData => {
      if (responseData != null) {

        Object.entries(responseData).map(b => {


               // @ts-ignore
            document.getElementById("profs").insertAdjacentHTML('beforeend', '          <div id="' + b[0] + 'div" class="card text-white bg-secondary mb-3">        <div class="card-body">            <h5 class="card-title">                <img src="' + b[1].photo + '" width="50" height="50" style="float: left; border-radius: 50%;" alt="">                &nbsp;&nbsp;' + b[1].name + ' &nbsp;                <img src="/assets/img/phone.png" width="15" height="20" style="filter:invert(1); float: center;"                alt=""> &nbsp;' + b[1].phone + ' &nbsp;                <img src="/assets/img/document-richtext.png" width="16" height="20"                style="filter:invert(1); float: center;" alt=""> &nbsp;' + b[1].nbrpro + '&nbsp;                  <img src="/assets/img/star.png" width="20" height="20" style="filter:invert(1); float: center;"                    alt=""> &nbsp;' + b[1].score + ' &nbsp;                <img src="/assets/img/calendar.png" width="20" height="20" style=" filter:invert(1);  float: center;" alt="">  &nbsp; '+ b[1].date +'  &nbsp;                <img  id="' + b[0] + 'remove" (click)="remove(' + "'" + b[0] + "'" + ')" src="/assets/img/remove.png" width="20" height="20" style="float: right;" alt="">                <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">                <img src="/assets/img/modify.png" width="20" height="20" style="float: right;" alt="">            </h5>        </div>    </div>');
            this.elementRef.nativeElement.querySelector('#' + b[0] + 'remove').addEventListener('click', this.remove.bind(this));

            // @ts-ignore
            document.getElementById("waiting").style.display = "none"
           



          })

        } else {
          // @ts-ignore
          document.getElementById("waiting").style.display = "none"
           // @ts-ignore
           document.getElementById("nodata").style.display = "block"
        }
    });

  }

    // @ts-ignore
    remove(str) {

      const httpOptions = {
        headers: new HttpHeaders()
      }
      httpOptions.headers.append('Access-Control-Allow-Origin', '*');
      httpOptions.headers.append('Content-Type', 'application/json');
      httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  
  
      if (typeof str == "object") {
        var x = str.srcElement.id
      } else {
        x = str
      }
  
      x = x.replace('remove', '');
      this.http.delete("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + x+ ".json", httpOptions).subscribe(responseData => {
  
        alert("Le compte a été supprimé !")
        location.reload();
      })
    }



    deconnecter() {
      localStorage.removeItem("adminnom")
      localStorage.removeItem("adminloc")
      localStorage.removeItem("adminp")
      this._router.navigate(['/a-fr-home']);
  
    }
  
    aboutme() {
      
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

    x = x.replace('modify', '');
    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/approved/" + loc + "/" + x + ".json", httpOptions).subscribe(responseData => {


      // @ts-ignore
      document.getElementById(x + "div").insertAdjacentHTML('beforeend', ' <div class="card text-white bg-secondary mb-3">    <div class="card-body">      <h5 class="card-title">        <label for="' + x + 'scorex">Score</label>        <input type="text" class="form-control" id="' + x + 'scorex" value="' + responseData.score + '">          <label for="' + x + 'typex">Type</label>      <select id="' + x + 'typex" class="form-control">        <option selected  value="' + responseData.type + '">' + responseData.type + '</option>        <option value="type_domestic">Domestique</option>        <option value="type_medical">Médical</option>        <option value="type_chemical">Chémique</option>        <option value="type_toxic">Toxique</option>        <option value="type_brokenroad">Route Cassée</option>        <option value="type_obstacleroad">R.Obstacle</option>        <option value="type_train">Train Panne</option>      </select>      <br>      Nouvelles Images      <br>   <br>      <button  id="' + x + 'picupload" (click)="picupload(' + "'" + x + "'" + ')" type="file" accept="image/*" class="btn btn-success">        <img src="/assets/img/arrow-bar-up.png" width="30" height="25" style="filter: invert(1); float: left;"          alt="">&nbsp; Télecharger</button>          <br>   <br>      <div class=" row">          <div class="col" style="background-color: aliceblue;" id="pic1">&nbsp;</div>&nbsp;          <div class="col" style="background-color: aliceblue;" id="pic2">&nbsp;</div>&nbsp;          <div class="col" style="background-color: aliceblue;" id="pic3">&nbsp;</div>&nbsp;          <div class="col" style="background-color: aliceblue;" id="pic4">&nbsp;</div>&nbsp;          <div class="col" style="background-color: aliceblue;" id="pic5">&nbsp;</div>      </div>      <br>      Images Actuelles      <br>      <br>      <img src="' + responseData.picture1 + '" width="150" height="125"> &nbsp;      <img src="' + responseData.picture2 + '" width="150" height="125"> &nbsp;      <img src="' + responseData.picture3 + '" width="150" height="125"> &nbsp;      <img src="' + responseData.picture4 + '" width="150" height="125"> &nbsp;      <img src="' + responseData.picture5 + '" width="150" height="125">      </h5> &nbsp;<br>      <button id="' + x + 'modifyx" (click)="modifyx(' + "'" + x + "'" + ')" type="file"  accept="image/*" class="btn text-end btn-warning">        <img src="/assets/img/arrow-bar-up.png" width="30" height="25" style="filter: invert(1); float: left;"          alt="">&nbsp; Modifier</button>    </div>  </div>');
      this.elementRef.nativeElement.querySelector('#' + x + 'modifyx').addEventListener('click', this.modifyx.bind(this));


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

    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/approved/" + loc + "/" + x + ".json", httpOptions).subscribe(responseData => {

      const object = {
        title: (document.getElementById(x + "titlex") as HTMLFormElement)['value'],
        subject: (document.getElementById(x + "subjectx") as HTMLFormElement)['value'],
        description: (document.getElementById(x + "descriptionx") as HTMLFormElement)['value'],
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

      this.http.put("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/approved/" + loc + "/" + x + ".json", object, httpOptions).subscribe(responseDataa => {

        location.reload();
      })


    })



  }

}


