import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-a-fr-accounts',
  templateUrl: './a-fr-accounts.component.html',
  styleUrls: ['./a-fr-accounts.component.css']
})
export class AFrAccountsComponent implements OnInit {

  constructor(private elementRef: ElementRef, private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    localStorage.setItem("adminn", "Mohamed Dhia Jebali")
    localStorage.setItem("adminl", "Ben Arous")
        // @ts-ignore
    document.getElementById("cred").innerHTML = '   <div id="cred" class="text-end">    <img src="/assets/img/person-fill.png" width="25" height="25" style=" float: left;" alt=""> &nbsp;'+localStorage.getItem("adminn")+'&nbsp;    <img src="/assets/img/location.png" width="20" height="25" class="d-inline-block align-top" alt=""> '+localStorage.getItem("adminl")+' &nbsp; </div>' 
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
            document.getElementById("profs").insertAdjacentHTML('beforeend', '          <div class="card text-white bg-secondary mb-3">        <div class="card-body">            <h5 class="card-title">                <img src="' + b[1].photo + '" width="50" height="50" style="float: left; border-radius: 50%;" alt="">                &nbsp;&nbsp;' + b[1].name + ' &nbsp;                <img src="/assets/img/phone.png" width="15" height="20" style="filter:invert(1); float: center;"                alt=""> &nbsp;' + b[1].phone + ' &nbsp;                <img src="/assets/img/document-richtext.png" width="16" height="20"                style="filter:invert(1); float: center;" alt=""> &nbsp;' + b[1].nbrpro + '&nbsp;                  <img src="/assets/img/star.png" width="20" height="20" style="filter:invert(1); float: center;"                    alt=""> &nbsp;' + b[1].score + ' &nbsp;                <img src="/assets/img/calendar.png" width="20" height="20" style=" filter:invert(1);  float: center;" alt="">  &nbsp; 2022/02/01  &nbsp;                <img src="/assets/img/remove.png" width="20" height="20" style="float: right;" alt="">                <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">                <img src="/assets/img/modify.png" width="20" height="20" style="float: right;" alt="">            </h5>        </div>    </div>');
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





}
