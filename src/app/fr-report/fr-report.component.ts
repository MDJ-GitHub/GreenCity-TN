import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import html2canvas from 'html2canvas';
import { copyCSSStyles } from 'html2canvas/dist/types/dom/document-cloner';
import { getLocaleDirection } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-fr-report',
  templateUrl: './fr-report.component.html',
  styleUrls: ['./fr-report.component.css']
})


export class FrReportComponent implements AfterViewInit {

  

  constructor( private router: Router, private http: HttpClient) { }

  ngAfterViewInit(): void {

    
    localStorage.setItem("step", "1");
    localStorage.setItem("capture", "1");
    localStorage.setItem("picc1","assets/img/empty.jpg");
    localStorage.setItem("picc2","assets/img/empty.jpg");
    localStorage.setItem("picc3","assets/img/empty.jpg");
    localStorage.setItem("picc4","assets/img/empty.jpg");
    localStorage.setItem("picc5","assets/img/empty.jpg");
    localStorage.setItem("profile-photoo","") ;
    window.scrollTo(0, 0);
    this.getlocation();
    setTimeout(function () {
      const element = document.getElementById("capture") as HTMLFormElement;
      element.scrollIntoView();
  }, 1200);




  }

  back() {


    if (localStorage.getItem("step") == "2") {
      (document.getElementById("card2") as HTMLFormElement).style.display = "none";
      (document.getElementById("card1") as HTMLFormElement).style.display = "block";
      (document.getElementById("input2") as HTMLFormElement).style.display = "none";
      (document.getElementById("input1") as HTMLFormElement).style.display = "block";
      localStorage.setItem("step", "1");
      (document.getElementById("b2") as HTMLFormElement).innerHTML =
        '    <div id="b2" class="inline-block"> <img  src="/assets/img/slot.png" width="30" height="30" class="center" alt=""> </div>';
      window.scrollTo(0, 0);




      return;
    }
    if (localStorage.getItem("step") == "3") {
      (document.getElementById("card3") as HTMLFormElement).style.display = "none";
      (document.getElementById("card2") as HTMLFormElement).style.display = "block";
      (document.getElementById("input3") as HTMLFormElement).style.display = "none";
      (document.getElementById("input2") as HTMLFormElement).style.display = "block";
      localStorage.setItem("step", "2");
      (document.getElementById("b3") as HTMLFormElement).innerHTML =
        '    <div id="b3" class="inline-block"> <img  src="/assets/img/slot.png" width="30" height="30" class="center" alt=""> </div>';
      window.scrollTo(0, 0);
      return;
    }
    if (localStorage.getItem("step") == "4") {
      (document.getElementById("card4") as HTMLFormElement).style.display = "none";
      (document.getElementById("card3") as HTMLFormElement).style.display = "block";
      (document.getElementById("input4") as HTMLFormElement).style.display = "none";
      (document.getElementById("input3") as HTMLFormElement).style.display = "block";
      localStorage.setItem("step", "3");
      (document.getElementById("b4") as HTMLFormElement).innerHTML =
        '    <div id="b4" class="inline-block"> <img  src="/assets/img/slot.png" width="30" height="30" class="center" alt=""> </div>';
      window.scrollTo(0, 0);
      return;
    }
    if (localStorage.getItem("step") == "5") {
      (document.getElementById("card5") as HTMLFormElement).style.display = "none";
      (document.getElementById("card4") as HTMLFormElement).style.display = "block";
      (document.getElementById("input5") as HTMLFormElement).style.display = "none";
      (document.getElementById("input4") as HTMLFormElement).style.display = "block";
      localStorage.setItem("step", "4");
      (document.getElementById("b5") as HTMLFormElement).innerHTML =
        '    <div id="b5" class="inline-block"> <img  src="/assets/img/slot.png" width="30" height="30" class="center" alt=""> </div>';
      window.scrollTo(0, 0);
      return;
    }




  }

  next() {


    if (localStorage.getItem("step") == "1") {
      (document.getElementById("card1") as HTMLFormElement).style.display = "none";
      (document.getElementById("card2") as HTMLFormElement).style.display = "block";
      (document.getElementById("input1") as HTMLFormElement).style.display = "none";
      (document.getElementById("input2") as HTMLFormElement).style.display = "block";
      localStorage.setItem("step", "2");
      (document.getElementById("b2") as HTMLFormElement).innerHTML =
        '    <div id="b2" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';
      window.scrollTo(0, 0);
      this.autoloc()
      return;
    }

    if (localStorage.getItem("step") == "2") {
      (document.getElementById("card2") as HTMLFormElement).style.display = "none";
      (document.getElementById("card3") as HTMLFormElement).style.display = "block";
      (document.getElementById("input2") as HTMLFormElement).style.display = "none";
      (document.getElementById("input3") as HTMLFormElement).style.display = "block";
      localStorage.setItem("step", "3");
      (document.getElementById("b3") as HTMLFormElement).innerHTML =
        '    <div id="b3" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';
      window.scrollTo(0, 0);



      
      return;
    }
    if (localStorage.getItem("step") == "3") {
      (document.getElementById("card3") as HTMLFormElement).style.display = "none";
      (document.getElementById("card4") as HTMLFormElement).style.display = "block";
      (document.getElementById("input3") as HTMLFormElement).style.display = "none";
      (document.getElementById("input4") as HTMLFormElement).style.display = "block";
      (document.getElementById("b4") as HTMLFormElement).innerHTML =
        '    <div id="b4" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';
      localStorage.setItem("step", "4");
      window.scrollTo(0, 0);
      return;
    }
    if (localStorage.getItem("step") == "4") {
      (document.getElementById("card4") as HTMLFormElement).style.display = "none";
      (document.getElementById("card5") as HTMLFormElement).style.display = "block";
      (document.getElementById("input4") as HTMLFormElement).style.display = "none";
      (document.getElementById("input5") as HTMLFormElement).style.display = "block";
      (document.getElementById("b5") as HTMLFormElement).innerHTML =
        '    <div id="b5" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';
      localStorage.setItem("step", "5");
      window.scrollTo(0, 0);
if (localStorage.getItem("profile-name")) {
  (document.getElementById("newprofile") as HTMLFormElement).style.display = "none";
  (document.getElementById("sameprofile") as HTMLFormElement).style.display = "block";
} 


      return;
    }
  }

  capture() {

    if (localStorage.getItem("capture") == "1") {
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
      
        function (canvas: any) {
 
          canvas.style.width = "207px";
          canvas.style.height ="210px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc1",x) ;

          (document.getElementById('pic1') as HTMLFormElement).appendChild(canvas);
        })
        

      localStorage.setItem("capture", "2");

      return;


    }

    if (localStorage.getItem("capture") == "2") {
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
        function (canvas: any) {
          canvas.style.width = "207px";
          canvas.style.height ="210px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc2",x) ;
          (document.getElementById('pic2') as HTMLFormElement).appendChild(canvas);
        })
      localStorage.setItem("capture", "3");
      return;

    }

    if (localStorage.getItem("capture") == "3") {
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
        function (canvas: any) {
          canvas.style.width = "207px";
          canvas.style.height ="210px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc3",x) ;
          (document.getElementById('pic3') as HTMLFormElement).appendChild(canvas);
        })
      localStorage.setItem("capture", "4");
      return;


    }

    if (localStorage.getItem("capture") == "4") {
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
        function (canvas: any) {
          canvas.style.width = "207px";
          canvas.style.height ="210px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc4",x) ;
          (document.getElementById('pic4') as HTMLFormElement).appendChild(canvas);
        })
      localStorage.setItem("capture", "5");
      return;


    }

    if (localStorage.getItem("capture") == "5") {
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
        function (canvas: any) {
          canvas.style.width = "207px";
          canvas.style.height ="210px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc5",x) ;
          (document.getElementById('pic5') as HTMLFormElement).appendChild(canvas);

        })
      localStorage.setItem("capture", "6");


      return;


    }





  }

  picupload() {


    if (localStorage.getItem("capture") == "5") {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
                let files =   Array.from(input.files as unknown as HTMLFormElement);
                var loadFile = function(_event: any) {
                  var reader = new FileReader();
                  reader.onload = function(){
                   let x =  document.createElement('img')
                   x.id = "p5" ;
                   x.style.width = "207px";
                   x.style.height ="210px";
                   
                   (document.getElementById('pic5') as HTMLFormElement).appendChild(x);
                    var output = document.getElementById('p5');
  
                    (output as HTMLFormElement)['src'] = reader.result;
                                        // @ts-ignore
                                        localStorage.setItem("picc5", reader.result) ;
                  };
                  reader.readAsDataURL(_event.target.files[0]);
                };
                loadFile(event) ;
            };
      input.click();
    }

    if (localStorage.getItem("capture") == "4") {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
                let files =   Array.from(input.files as unknown as HTMLFormElement);
                var loadFile = function(_event: any) {
                  var reader = new FileReader();
                  reader.onload = function(){
                   let x =  document.createElement('img')
                   x.id = "p4" ;
                   x.style.width = "207px";
                   x.style.height ="210px";
                   (document.getElementById('pic4') as HTMLFormElement).appendChild(x);
                    var output = document.getElementById('p4');
  
                    (output as HTMLFormElement)['src'] = reader.result;
                                        // @ts-ignore
                                        localStorage.setItem("picc4", reader.result) ;
                  };
                  reader.readAsDataURL(_event.target.files[0]);
                };
                loadFile(event) ;
            };
      input.click();
      localStorage.setItem("capture", "5");
    }





    if (localStorage.getItem("capture") == "3") {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
                let files =   Array.from(input.files as unknown as HTMLFormElement);
                var loadFile = function(_event: any) {
                  var reader = new FileReader();
                  reader.onload = function(){
                   let x =  document.createElement('img')
                   x.id = "p3" ;
                   x.style.width = "207px";
                   x.style.height ="210px";
                   (document.getElementById('pic3') as HTMLFormElement).appendChild(x);
                    var output = document.getElementById('p3');
  
                    (output as HTMLFormElement)['src'] = reader.result;
                                        // @ts-ignore
                                        localStorage.setItem("picc3", reader.result) ;
                  };
                  reader.readAsDataURL(_event.target.files[0]);
                };
                loadFile(event) ;
            };
      input.click();
      localStorage.setItem("capture", "4");
    }


    if (localStorage.getItem("capture") == "2") {

      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
                let files =   Array.from(input.files as unknown as HTMLFormElement);
                var loadFile = function(_event: any) {
                  var reader = new FileReader();
                  reader.onload = function(){
                   let x =  document.createElement('img')
                   x.id = "p2" ;
                   x.style.width = "207px";
                   x.style.height ="210px";
                   (document.getElementById('pic2') as HTMLFormElement).appendChild(x);
                    var output = document.getElementById('p2');
  
                    (output as HTMLFormElement)['src'] = reader.result;
                                        // @ts-ignore
                                        localStorage.setItem("picc2", reader.result) ;
                  };
                  reader.readAsDataURL(_event.target.files[0]);
                };
                loadFile(event) ;
            };
      input.click();
      localStorage.setItem("capture", "3");
    }


    if (localStorage.getItem("capture") == "1") {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
                let files =   Array.from(input.files as unknown as HTMLFormElement);
                var loadFile = function(_event: any) {
                  var reader = new FileReader();
                  reader.onload = function(){
                   let x =  document.createElement('img')
                   x.id = "p1" ;
                   x.style.width = "207px";
                   x.style.height ="210px";
                   (document.getElementById('pic1') as HTMLFormElement).appendChild(x);
                    var output = document.getElementById('p1');
  
                    (output as HTMLFormElement)['src'] = reader.result;
                    // @ts-ignore
                    localStorage.setItem("picc1", reader.result) ;
                  };
                  reader.readAsDataURL(_event.target.files[0]);
                                      
               
                   
                  

                };
                loadFile(event) ;

            };
      input.click();
      localStorage.setItem("capture", "2");
     
    }


  }

  autoloc() {
    
    var locs = [
      {
        city: "Tunis",
        lat: 36.8008,
        lng: 10.18
      },
      {
        city: "Sfax",
        lat: 34.74,
        lng: 10.76
      },
      {
        city: "Sousse",
        lat: 35.8333,
        lng: 10.6333
      },
      {
        city: "Kairouan",
        lat: 35.6833,
        lng: 10.1
      },
      {
        city: "Metouia",
        lat: 33.96,
        lng: 10
      },
      {
        city: "Kebili",
        lat: 33.705,
        lng: 8.965
      },
      {
        city: "Bizerte",
        lat: 37.2744,
        lng: 9.8739
      },
      {
        city: "Sidi Bouzid",
        lat: 35.0381,
        lng: 9.4858
      },
      {
        city: "Gabes",
        lat: 33.8814,
        lng: 10.0983
      },
      {
        city: "Ariana",
        lat: 36.8625,
        lng: 10.1956
      },
      {
        city: "Jendouba",
        lat: 36.5011,
        lng: 8.7803
      },
      {
        city: "Gafsa",
        lat: 34.4167,
        lng: 8.7833
      },
      {
        city: "Msaken",
        lat: 35.7333,
        lng: 10.5833
      },
      {
        city: "Medenine",
        lat: 33.3547,
        lng: 10.5053
      },
      {
        city: "Beja",
        lat: 36.7256,
        lng: 9.1817
      },
      {
        city: "Kasserine",
        lat: 35.1667,
        lng: 8.8333
      },
      {
        city: "Monastir",
        lat: 35.778,
        lng: 10.8262
      },
      {
        city: "Hammamet",
        lat: 36.4167,
        lng: 10.6
      },
      {
        city: "Tataouine",
        lat: 32.9333,
        lng: 10.45
      },
      {
        city: "La Marsa",
        lat: 36.8764,
        lng: 10.3253
      },
      {
        city: "Ben Arous",
        lat: 36.7531,
        lng: 10.2189
      },
      {
        city: "Sakiet ez Zit",
        lat: 34.8,
        lng: 10.77
      },
      {
        city: "Zarzis",
        lat: 33.5,
        lng: 11.1167
      },
      {
        city: "Ben Gardane",
        lat: 33.1389,
        lng: 11.2167
      },
      {
        city: "Mahdia",
        lat: 35.5047,
        lng: 11.0622
      },
      {
        city: "Houmt Souk",
        lat: 33.8667,
        lng: 10.85
      },
      {
        city: "Fouchana",
        lat: 36.6987,
        lng: 10.1693
      },
      {
        city: "Le Kram",
        lat: 36.8333,
        lng: 10.3167
      },
      {
        city: "Le Bardo",
        lat: 36.8092,
        lng: 10.1406
      },
      {
        city: "El Kef",
        lat: 36.1667,
        lng: 8.7
      },
      {
        city: "El Hamma",
        lat: 33.8864,
        lng: 9.7951
      },
      {
        city: "Nabeul",
        lat: 36.4514,
        lng: 10.7361
      },
      {
        city: "Djemmal",
        lat: 35.64,
        lng: 10.76
      },
      {
        city: "Korba",
        lat: 36.5667,
        lng: 10.8667
      },
      {
        city: "Menzel Temime",
        lat: 36.7833,
        lng: 10.9833
      },
      {
        city: "Ghardimaou",
        lat: 36.4503,
        lng: 8.4397
      },
      {
        city: "Menzel Bourguiba",
        lat: 37.15,
        lng: 9.7833
      },
      {
        city: "Radès",
        lat: 36.7667,
        lng: 10.2833
      },
      {
        city: "Manouba",
        lat: 36.8,
        lng: 10.1
      },
      {
        city: "Kelibia",
        lat: 36.8475,
        lng: 11.0939
      },
      {
        city: "Rass el Djebel",
        lat: 37.215,
        lng: 10.12
      },
      {
        city: "Tebourba",
        lat: 36.8295,
        lng: 9.8411
      },
      {
        city: "El Jem",
        lat: 35.3,
        lng: 10.7167
      },
      {
        city: "Douz",
        lat: 33.4572,
        lng: 9.0258
      },
      {
        city: "Hammam Sousse",
        lat: 35.8589,
        lng: 10.5939
      },
      {
        city: "Hammam-Lif",
        lat: 36.7308,
        lng: 10.3275
      },
      {
        city: "Sbiba",
        lat: 35.5433,
        lng: 9.0736
      },
      {
        city: "Sejenane",
        lat: 37.0564,
        lng: 9.2382
      },
      {
        city: "Tozeur",
        lat: 33.9197,
        lng: 8.1336
      },
      {
        city: "Dar Chabanne",
        lat: 36.47,
        lng: 10.75
      },
      {
        city: "Aine Draham",
        lat: 36.7833,
        lng: 8.7
      },
      {
        city: "Bou Salem",
        lat: 36.6111,
        lng: 8.9698
      },
      {
        city: "Ez Zahra",
        lat: 36.7439,
        lng: 10.3083
      },
      {
        city: "Skhira",
        lat: 34.3006,
        lng: 10.0708
      },
      {
        city: "Akouda",
        lat: 35.8712,
        lng: 10.5712
      },
      {
        city: "Mateur",
        lat: 37.04,
        lng: 9.665
      },
      {
        city: "Rhennouch",
        lat: 33.9397,
        lng: 10.065
      },
      {
        city: "Dahmani",
        lat: 35.9424,
        lng: 8.8284
      },
      {
        city: "El Alia",
        lat: 37.1667,
        lng: 10.0333
      },
      {
        city: "Siliana",
        lat: 36.0819,
        lng: 9.3747
      },
      {
        city: "Zaghouan",
        lat: 36.4028,
        lng: 10.1433
      }
     ]

     var lat = 0 ;
     var lng = 0 ;
     if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
         lng = position.coords.longitude;
         lat = position.coords.latitude;

        
         var cc = "Tunis" ;
         var clat = 36.8008
         var clng = 10.18 ;
     
         locs.forEach(function (arrayItem) {
     
           if ( Math.abs((lat - arrayItem.lat) + (lng - arrayItem.lng)) < Math.abs((lat - clat) + (lng - clng))) {
     
             cc = arrayItem.city ;
             clat = arrayItem.lat ;
             clng = arrayItem.lng  ;
             
           }
     
       });

       (document.getElementById('currentloc') as HTMLFormElement).textContent = cc;

      });
    } else {
      console.log("No support for geolocation")
    }


 


   
     
  }

send() {


  const httpOptions = {
    headers: new HttpHeaders()
  }
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Content-Type', 'application/json');
  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


  var loc =  "" ;
  // @ts-ignore
  if ( document.querySelector('input[name="locationrad"]:checked').value == "autol" ) {
     // @ts-ignore
     loc =  localStorage.getItem("currentpos") ;
  } else 
  {
     // @ts-ignore
    loc = document.querySelector('input[name="locationrad"]:checked').value
  }


  var name =  "" ;
  var phone =  "" ;
  var photo = "" ;
  // @ts-ignore
  if ( document.querySelector('input[name="sending"]:checked').value == "sendi2" ) {
     name = (document.getElementById("name") as HTMLFormElement)['value']
     phone = (document.getElementById("phone") as HTMLFormElement)['value']
       // @ts-ignore
     photo = localStorage.getItem("profile-photoo")
     localStorage.setItem("profile-name",(document.getElementById("name") as HTMLFormElement)['value'])
     localStorage.setItem("profile-phone",(document.getElementById("phone") as HTMLFormElement)['value'])
      // @ts-ignore
     localStorage.setItem("profile-photo",localStorage.getItem("profile-photoo"))
     localStorage.setItem("profile-nbrpro","1")
     localStorage.setItem("profile-score","0")

     const pobject =  {
      name: name,
      phone:  phone,
      photo: photo,
      nbrpro: "1",
      score: "0",
  }
  
     this.http.put("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/accounts/"+name+"-"+phone+".json",pobject,httpOptions).subscribe(responseData => {
      console.log(responseData);
    });
  

     // @ts-ignore
  } else if  ( document.querySelector('input[name="sending"]:checked').value == "sendi3" ) {
  
    // @ts-ignore
    name = localStorage.getItem("profile-name") ;
    // @ts-ignore
    phone = localStorage.getItem("profile-phone") ;
    // @ts-ignore
    photo = localStorage.getItem("profile-photo") ;
        // @ts-ignore
  } else if  ( document.querySelector('input[name="sending"]:checked').value == "sendi1" ) {
    name = "Anonyme"
    phone = "Anonyme"
  }



  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  var h = String(today.getHours()).padStart(2, '0');
  var m = String(today.getMinutes()).padStart(2, '0');
  var s = String(today.getSeconds()).padStart(2, '0');
  var time = h + ":" + m + ":" + s +  " - " + mm + '/' + dd + '/' + yyyy ; 


 // @ts-ignore
 var typ =  document.querySelector('input[name="dtype"]:checked').value ;
  const object =  {
    title: (document.getElementById("texttitle") as HTMLFormElement)['value'] ,
    subject: (document.getElementById("textsub") as HTMLFormElement)['value'] ,
    description: (document.getElementById("textdesc") as HTMLFormElement)['value'],
    location: loc,
    type: typ,
    name: name,
    phone: phone,
    date: time,
    picture1 : localStorage.getItem("picc1"),
    picture2 : localStorage.getItem("picc2"),
    picture3 : localStorage.getItem("picc3"),
    picture4 : localStorage.getItem("picc4"),
    picture5 : localStorage.getItem("picc5"),
}


  this.http.post("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/"+loc+"/"+typ+".json",object,httpOptions).subscribe(responseData => {
    console.log(responseData);
  });



}

getlocation() {
    
  var locs = [
    {
      city: "Tunis",
      lat: 36.8008,
      lng: 10.18
    },
{
      city: "Sfax",
      lat: 34.74,
      lng: 10.76
    },
    {
      city: "Sousse",
      lat: 35.8333,
      lng: 10.6333
    },
    {
      city: "Kairouan",
      lat: 35.6833,
      lng: 10.1
    },
    {
      city: "Metouia",
      lat: 33.96,
      lng: 10
    },
    {
      city: "Kebili",
      lat: 33.705,
      lng: 8.965
    },
    {
      city: "Bizerte",
      lat: 37.2744,
      lng: 9.8739
    },
    {
      city: "Sidi Bouzid",
      lat: 35.0381,
      lng: 9.4858
    },
    {
      city: "Gabes",
      lat: 33.8814,
      lng: 10.0983
    },
    {
      city: "Ariana",
      lat: 36.8625,
      lng: 10.1956
    },
    {
      city: "Jendouba",
      lat: 36.5011,
      lng: 8.7803
    },
    {
      city: "Gafsa",
      lat: 34.4167,
      lng: 8.7833
    },
    {
      city: "Msaken",
      lat: 35.7333,
      lng: 10.5833
    },
    {
      city: "Medenine",
      lat: 33.3547,
      lng: 10.5053
    },
    {
      city: "Beja",
      lat: 36.7256,
      lng: 9.1817
    },
    {
      city: "Kasserine",
      lat: 35.1667,
      lng: 8.8333
    },
    {
      city: "Monastir",
      lat: 35.778,
      lng: 10.8262
    },
    {
      city: "Hammamet",
      lat: 36.4167,
      lng: 10.6
    },
    {
      city: "Tataouine",
      lat: 32.9333,
      lng: 10.45
    },
    {
      city: "La Marsa",
      lat: 36.8764,
      lng: 10.3253
    },
    {
      city: "Ben Arous",
      lat: 36.7531,
      lng: 10.2189
    },
    {
      city: "Sakiet ez Zit",
      lat: 34.8,
      lng: 10.77
    },
    {
      city: "Zarzis",
      lat: 33.5,
      lng: 11.1167
    },
    {
      city: "Ben Gardane",
      lat: 33.1389,
      lng: 11.2167
    },
    {
      city: "Mahdia",
      lat: 35.5047,
      lng: 11.0622
    },
    {
      city: "Houmt Souk",
      lat: 33.8667,
      lng: 10.85
    },
    {
      city: "Fouchana",
      lat: 36.6987,
      lng: 10.1693
    },
    {
      city: "Le Kram",
      lat: 36.8333,
      lng: 10.3167
    },
    {
      city: "Le Bardo",
      lat: 36.8092,
      lng: 10.1406
    },
    {
      city: "El Kef",
      lat: 36.1667,
      lng: 8.7
    },
    {
      city: "El Hamma",
      lat: 33.8864,
      lng: 9.7951
    },
    {
      city: "Nabeul",
      lat: 36.4514,
      lng: 10.7361
    },
    {
      city: "Djemmal",
      lat: 35.64,
      lng: 10.76
    },
    {
      city: "Korba",
      lat: 36.5667,
      lng: 10.8667
    },
    {
      city: "Menzel Temime",
      lat: 36.7833,
      lng: 10.9833
    },
    {
      city: "Ghardimaou",
      lat: 36.4503,
      lng: 8.4397
    },
    {
      city: "Menzel Bourguiba",
      lat: 37.15,
      lng: 9.7833
    },
    {
      city: "Radès",
      lat: 36.7667,
      lng: 10.2833
    },
    {
      city: "Manouba",
      lat: 36.8,
      lng: 10.1
    },
    {
      city: "Kelibia",
      lat: 36.8475,
      lng: 11.0939
    },
    {
      city: "Rass el Djebel",
      lat: 37.215,
      lng: 10.12
    },
    {
      city: "Tebourba",
      lat: 36.8295,
      lng: 9.8411
    },
    {
      city: "El Jem",
      lat: 35.3,
      lng: 10.7167
    },
    {
      city: "Douz",
      lat: 33.4572,
      lng: 9.0258
    },
    {
      city: "Hammam Sousse",
      lat: 35.8589,
      lng: 10.5939
    },
    {
      city: "Hammam-Lif",
      lat: 36.7308,
      lng: 10.3275
    },
    {
      city: "Sbiba",
      lat: 35.5433,
      lng: 9.0736
    },
    {
      city: "Sejenane",
      lat: 37.0564,
      lng: 9.2382
    },
    {
      city: "Tozeur",
      lat: 33.9197,
      lng: 8.1336
    },
    {
      city: "Dar Chabanne",
      lat: 36.47,
      lng: 10.75
    },
    {
      city: "Aine Draham",
      lat: 36.7833,
      lng: 8.7
    },
    {
      city: "Bou Salem",
      lat: 36.6111,
      lng: 8.9698
    },
    {
      city: "Ez Zahra",
      lat: 36.7439,
      lng: 10.3083
    },
    {
      city: "Skhira",
      lat: 34.3006,
      lng: 10.0708
    },
    {
      city: "Akouda",
      lat: 35.8712,
      lng: 10.5712
    },
    {
      city: "Mateur",
      lat: 37.04,
      lng: 9.665
    },
    {
      city: "Rhennouch",
      lat: 33.9397,
      lng: 10.065
    },
    {
      city: "Dahmani",
      lat: 35.9424,
      lng: 8.8284
    },
    {
      city: "El Alia",
      lat: 37.1667,
      lng: 10.0333
    },
    {
      city: "Siliana",
      lat: 36.0819,
      lng: 9.3747
    },
    {
      city: "Zaghouan",
      lat: 36.4028,
      lng: 10.1433
    }
   ]

   var lat = 0 ;
   var lng = 0 ;
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
       lng = position.coords.longitude;
       lat = position.coords.latitude;

      
       var cc = "Tunis" ;
       var clat = 36.8008
       var clng = 10.18 ;
   
       locs.forEach(function (arrayItem) {
   
         if ( Math.abs((lat - arrayItem.lat) + (lng - arrayItem.lng)) < Math.abs((lat - clat) + (lng - clng))) {
   
           cc = arrayItem.city ;
           clat = arrayItem.lat ;
           clng = arrayItem.lng  ;
           
         }
   
     });

     (document.getElementById('currentposition') as HTMLFormElement).innerHTML = 
     '<img src="/assets/img/location.png" width="15" height="20" class="d-inline-block align-top"alt=""> ' + cc ;
     localStorage.setItem("currentpos",cc) ;

    });
  } else {
    console.log("No support for geolocation")
  }





 
   
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





}

