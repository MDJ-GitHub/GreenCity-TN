import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SHA256, enc, x64 } from "crypto-js";
import { Router } from '@angular/router';


@Component({
  selector: 'app-a-fr-home',
  templateUrl: './a-fr-home.component.html',
  styleUrls: ['./a-fr-home.component.css']
})
export class AFrHomeComponent implements OnInit {

  constructor(private elementRef: ElementRef, private http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.yo() ;
  }

  yo() {


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
          var x = ""
 // @ts-ignore
 if (username) {
 if (username.includes(" ")) {
    // @ts-ignore
         x = username.replace(' ', '_');
  }
}
    this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/adminaccounts/" + x + "-" + cpassword + ".json", httpOptions).subscribe(responseData => {
      if (responseData != null) {
          this._router.navigate(['/a-fr-reports']);
      }

  })
}

  login() {

    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


    // @ts-ignore
    if (document.getElementById("username") == "") {
      alert("")
      return;
    }

    // @ts-ignore
    if (document.getElementById("password") == "") {
      alert("")
      return;
    }

    var username = (document.getElementById("username") as HTMLFormElement)['value']
    var password = (document.getElementById("password") as HTMLFormElement)['value']
    var cpassword = SHA256(password).toString(enc.Hex);

    var x = username.replace(' ', '_');

    this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/adminaccounts/" + x + "-" + cpassword + ".json", httpOptions).subscribe(responseData => {
      if (responseData != null) {
        // @ts-ignore
        localStorage.setItem("adminnom", responseData.username)
        // @ts-ignore
        localStorage.setItem("adminloc", responseData.location)
        // @ts-ignore
        localStorage.setItem("adminp", password)
        this._router.navigate(['/a-fr-info']);
        window.location.reload();

      } else {
        alert("Le nom d'utilisateur ou le mot de passe sont erronés. Veuillez insérer les bons identifiants.")
      }

    })





  }

  deconnecter() {
    localStorage.removeItem("adminnom")
    localStorage.removeItem("adminloc")
    localStorage.removeItem("adminp")


  }

  aboutme() {
    
  }

}
