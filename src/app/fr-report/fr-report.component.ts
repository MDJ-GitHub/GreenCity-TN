import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import html2canvas from 'html2canvas';
import { copyCSSStyles } from 'html2canvas/dist/types/dom/document-cloner';
import { getLocaleDirection } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { boxShadow } from 'html2canvas/dist/types/css/property-descriptors/box-shadow';


@Component({
  selector: 'app-fr-report',
  templateUrl: './fr-report.component.html',
  styleUrls: ['./fr-report.component.css']
})


export class FrReportComponent implements AfterViewInit {



  constructor(private elementRef: ElementRef, private router: Router, private http: HttpClient) { }

  ngAfterViewInit(): void {

    this.getlocation();
    navigator.geolocation.getCurrentPosition((position) => {
    }
      , (error) => {
        alert("Afin de signaler la position du problème, vous devez activer l'accès GPS.")
      }
    );

    localStorage.setItem("step", "1");
    localStorage.setItem("capture", "1");
    localStorage.setItem("picc1", "assets/img/empty.jpg");
    localStorage.setItem("picc2", "assets/img/empty.jpg");
    localStorage.setItem("picc3", "assets/img/empty.jpg");
    localStorage.setItem("picc4", "assets/img/empty.jpg");
    localStorage.setItem("picc5", "assets/img/empty.jpg");
    localStorage.setItem("profile-photoo", "");
    localStorage.setItem("selecttypea", "");
    localStorage.setItem("selecttypeb", "");
    window.scrollTo(0, 0);
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
      if (localStorage.getItem("capture") == "1") {
        alert("S'il vous plaît, vous devez fournir au moins une image pour le problème.")
      } else {
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

      if (localStorage.getItem("selecttypea") == "") {
        alert("Veuillez sélectionner le type de problème.")
        return;
      }
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
      if ((document.getElementById("texttitle") as HTMLFormElement)['value'] == "") {
        alert("S'il vous plaît, remplissez toutes les entrées textuelles car elles sont nécessaires pour l'identification du problème.")
        return;
      }
      if ((document.getElementById("texttitle") as HTMLFormElement)['value'] == "") {
        alert("S'il vous plaît, remplissez toutes les entrées textuelles car elles sont nécessaires pour l'identification du problème.")
        return;
      }







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
          x = x.replace(' ', '_');
        }

        this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + x + "-" + phone + ".json", httpOptions).subscribe(responseData => {
          if (responseData != null) {

            // @ts-ignore
            var name = localStorage.getItem("profile-name");

            var phonee = localStorage.getItem("profile-phone");
            // @ts-ignore
            document.getElementById("telex").innerHTML = phonee

            // @ts-ignore
            var photo = localStorage.getItem("profile-photo");
            // @ts-ignore
            document.getElementById("nomx").innerHTML = name;




            (document.getElementById("newprofile") as HTMLFormElement).style.display = "none";
            (document.getElementById("sameprofile") as HTMLFormElement).style.display = "block";
            return;


          } else {
            alert("Le profil de votre compte est supprimé par les administrateurs ou corrompu, veuillez contacter les administrateurs pour plus d'informations.");
            (document.getElementById("newprofile") as HTMLElement).style.display = "block";


          }

        });




      }












      (document.getElementById("card4") as HTMLFormElement).style.display = "none";
      (document.getElementById("card5") as HTMLFormElement).style.display = "block";
      (document.getElementById("input4") as HTMLFormElement).style.display = "none";
      (document.getElementById("input5") as HTMLFormElement).style.display = "block";
      (document.getElementById("b5") as HTMLFormElement).innerHTML =
        '    <div id="b5" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';
      localStorage.setItem("step", "5");
      window.scrollTo(0, 0);


      // @ts-ignore
      var name = localStorage.getItem("profile-name");
      // @ts-ignore
      var phone = localStorage.getItem("profile-phone");
      // @ts-ignore
      var photo = localStorage.getItem("profile-photo");
      // @ts-ignore
      document.getElementById("nomx").innerHTML = name
      // @ts-ignore
      document.getElementById("telex").innerHTML = phone
      return;
    }
  }

  capture() {

    if (localStorage.getItem("capture") == "1") {
      var snd = new Audio("assets/sfx/camera.mp3"); // buffers automatically when created
      snd.play();
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(

        function (canvas: any) {
          canvas.id = "p1"
          canvas.style.width = "55px";
          canvas.style.height = "55px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc1", x);

          (document.getElementById('pic1') as HTMLFormElement).appendChild(canvas);
        })


      localStorage.setItem("capture", "2");

      return;


    }

    if (localStorage.getItem("capture") == "2") {
      var snd = new Audio("assets/sfx/camera.mp3"); // buffers automatically when created
      snd.play();
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
        function (canvas: any) {
          canvas.id = "p2"
          canvas.style.width = "55px";
          canvas.style.height = "55px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc2", x);
          (document.getElementById('pic2') as HTMLFormElement).appendChild(canvas);
        })
      localStorage.setItem("capture", "3");
      return;

    }

    if (localStorage.getItem("capture") == "3") {
      var snd = new Audio("assets/sfx/camera.mp3"); // buffers automatically when created
      snd.play();
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
        function (canvas: any) {
          canvas.id = "p3"
          canvas.style.width = "55px";
          canvas.style.height = "55px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc3", x);
          (document.getElementById('pic3') as HTMLFormElement).appendChild(canvas);
        })
      localStorage.setItem("capture", "4");
      return;


    }

    if (localStorage.getItem("capture") == "4") {
      var snd = new Audio("assets/sfx/camera.mp3"); // buffers automatically when created
      snd.play();
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
        function (canvas: any) {
          canvas.id = "p4"
          canvas.style.width = "55px";
          canvas.style.height = "55px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc4", x);
          (document.getElementById('pic4') as HTMLFormElement).appendChild(canvas);
        })
      localStorage.setItem("capture", "5");
      return;


    }

    if (localStorage.getItem("capture") == "5") {
      var snd = new Audio("assets/sfx/camera.mp3"); // buffers automatically when created
      snd.play();
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
        function (canvas: any) {
          canvas.id = "p5"
          canvas.style.width = "55px";
          canvas.style.height = "55px";
          var x = canvas.toDataURL();
          localStorage.setItem("picc5", x);
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
        let files = Array.from(input.files as unknown as HTMLFormElement);
        var loadFile = function (_event: any) {
          var reader = new FileReader();
          reader.onload = function () {
            let x = document.createElement('img')
            x.id = "p5";
            x.style.width = "55px";
            x.style.height = "55px";

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
            x.style.width = "55px";
            x.style.height = "55px";
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
            x.style.width = "55px";
            x.style.height = "55px";
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
            x.style.width = "55px";
            x.style.height = "55px";
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
            x.style.width = "55px";
            x.style.height = "55px";
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

  autoloc() {

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

        // @ts-ignore
        document.getElementById("lat").value = lat;
        // @ts-ignore
        document.getElementById("lon").value = lng;






      });

      // @ts-ignore
      document.getElementById("manl").value = localStorage.getItem("currentpos")
      this.selectm()

    } else {
      console.log("No support for geolocation")
    }




  }

  send() {

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


    var loc = "";
    var lat = "";
    var lon = "";
    var mun = "";
    // @ts-ignore
    loc = document.getElementById("manl").value
    // @ts-ignore
    lat = document.getElementById("lat").value
    // @ts-ignore
    lon = document.getElementById("lon").value
    // @ts-ignore
    mun = document.getElementById("mun").value



    var name = "";
    var phone = "";
    var photo = "";
    // @ts-ignore
    if (document.querySelector('input[name="sending"]:checked').value == "sendi2") {
      name = (document.getElementById("name") as HTMLFormElement)['value']
      phone = (document.getElementById("phone") as HTMLFormElement)['value']
      // @ts-ignore
      photo = localStorage.getItem("profile-photoo")

      if (name == "") {
        alert("S'il vous plaît, si vous voulez créer un profil, vous devez fournir un nom et un numéro de téléphone.")
        return;
      }

      if (phone == "") {
        alert("S'il vous plaît, si vous voulez créer un profil, vous devez fournir un nom et un numéro de téléphone.")
        return;
      }

      if (photo == "") {
        photo = "/assets/img/person-fill.png"
      }


      localStorage.setItem("profile-name", (document.getElementById("name") as HTMLFormElement)['value'])
      localStorage.setItem("profile-phone", (document.getElementById("phone") as HTMLFormElement)['value'])
      // @ts-ignore
      localStorage.setItem("profile-photo", localStorage.getItem("profile-photoo"))
      localStorage.setItem("profile-nbrpro", "1")
      localStorage.setItem("profile-score", "0")


      const pobject = {
        name: name,
        phone: phone,
        photo: photo,
        nbrpro: "1",
        score: "0",
        date: time,
      }

      var x = name

      // @ts-ignore
      while (x.includes(" ")) {
        // @ts-ignore
        x = x.replace(' ', '_');
      }

      this.http.put("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + x + "-" + phone + ".json", pobject, httpOptions).subscribe(responseData => {
      });


      // @ts-ignore
    } else if (document.querySelector('input[name="sending"]:checked').value == "sendi3") {

      // @ts-ignore
      name = localStorage.getItem("profile-name");



      // @ts-ignore
      phone = localStorage.getItem("profile-phone");
      // @ts-ignore
      photo = localStorage.getItem("profile-photo");

      var x = name

      // @ts-ignore
      while (x.includes(" ")) {
        // @ts-ignore
        x = x.replace(' ', '_');
      }

      this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + x + "-" + phone + ".json", httpOptions).subscribe(responseDataa => {
        if (responseDataa != null) {

          // @ts-ignore
          var l = responseDataa.nbrpro
          l++

          // @ts-ignore
          var ll = responseDataa.score

          const ob = {
            name: name,
            phone: phone,
            photo: photo,
            nbrpro: l,
            score: ll,
          }

          var x = name.replace(' ', '_');
          this.http.put("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/accounts/" + x + "-" + phone + ".json", ob, httpOptions).subscribe(responseData => {
            console.log(responseData);
          });


        }

      })
      // @ts-ignore
    } else if (document.querySelector('input[name="sending"]:checked').value == "sendi1") {
      name = "Anonyme"
      phone = "Anonyme"
    }

    // @ts-ignore
    var bs = document.getElementById("bs").value


    // @ts-ignore
    const object = {
      title: (document.getElementById("texttitle") as HTMLFormElement)['value'],
      subject: (document.getElementById("textsub") as HTMLFormElement)['value'],
      location: loc,
      type: localStorage.getItem("selecttypea"),
      name: name,
      phone: phone,
      date: time,
      picture1: localStorage.getItem("picc1"),
      picture2: localStorage.getItem("picc2"),
      picture3: localStorage.getItem("picc3"),
      picture4: localStorage.getItem("picc4"),
      picture5: localStorage.getItem("picc5"),
      mun: mun,
      bs: bs,
      lat: lat,
      lon: lon
    }

    // @ts-ignore
    document.getElementById("waiting").style.display = "block"
    const element = document.getElementById("waiting") as HTMLFormElement;
    element.scrollIntoView();

    this.http.post("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/problems/" + loc + ".json", object, httpOptions).subscribe(responseData => {
      console.log(responseData);
      // @ts-ignore
      document.getElementById("waiting").style.display = "none"
      alert("Le rapport a été envoyé avec succès! Il sera vérifié par les administrateurs pour le moment.")
      this.http.get("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/index/problems/" + loc + "/objects.json", httpOptions).subscribe(responseDataa => {
        if (responseDataa != null) {

          // @ts-ignore
          var list = responseDataa.list
          // @ts-ignore
          list = list + ',' + responseData.name
          const o = {
            // @ts-ignore
            list: list

          }

          this.http.put("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/index/problems/" + loc + "/objects.json", o, httpOptions).subscribe(responseDatax => {
            this.router.navigate(['/fr-problems']);
          })

        } else {
          const o = {
            // @ts-ignore
            list: responseData.name
          }
          this.http.put("https://greencitytemp-default-rtdb.europe-west1.firebasedatabase.app/index/problems/" + loc + "/objects.json", o, httpOptions).subscribe(responseDataxx => {
            this.router.navigate(['/fr-problems']);
          })

        }
      })


    });



  }

  getlocation() {

    if (localStorage.getItem("locmode") == "auto") {
      var locs = [{ city: "Tunis", lat: 33.8439408, lng: 9.400138 }, { city: "Sfax", lat: 34.739739, lng: 10.7598516 }, { city: "Sousse", lat: 35.828829, lng: 10.640525 }, { city: "Kairouan", lat: 35.6775263, lng: 10.1006205 }, { city: "Kébili", lat: 33.7058066, lng: 8.9705891 }, { city: "Bizerte", lat: 37.2732415, lng: 9.8713665 }, { city: "Sidi Bouzid", lat: 34.881181, lng: 9.52635984718234 }, { city: "Gabès", lat: 33.8833922, lng: 10.0971389 }, { city: "Ariana", lat: 36.859939, lng: 10.190973 }, { city: "Jendouba", lat: 36.5013895, lng: 8.7811635 }, { city: "Gafsa", lat: 34.425149, lng: 8.786218 }, { city: "Béja", lat: 36.7270373, lng: 9.1814915 }, { city: "Kasserine", lat: 35.1691517, lng: 8.8364635 }, { city: "Monastir", lat: 35.7398399, lng: 10.7986953383714 }, { city: "Tataouine", lat: 32.929216, lng: 10.451229 }, { city: "Ben Arous", lat: 36.7488603, lng: 10.22460082 }, { city: "Mahdia", lat: 35.48810105, lng: 10.9626808407717 }, { city: "Kef", lat: 36.1675068, lng: 8.7043493 }, { city: "Nabeul", lat: 36.4823676, lng: 10.6707196978804 }, { city: "Manouba", lat: 36.8115973, lng: 10.0857631871932 }, { city: "Tozeur", lat: 33.913485, lng: 8.11182407105263 }, { city: "Zaghouan", lat: 36.41171955, lng: 10.2019797844446 }, { city: "Médenine", lat: 33.339592, lng: 10.491185 }, { city: "Siliana", lat: 36.085041, lng: 9.369468 }]
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


  profileph() {


    if (document.getElementById("pp")) {
      (document.getElementById("pp") as HTMLFormElement).remove;
    }
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
      let files = Array.from(input.files as unknown as HTMLFormElement);
      var loadFile = function (_event: any) {
        var reader = new FileReader();
        reader.onload = function () {
          let x = document.createElement('img')
          x.id = "pp";
          x.style.width = "100px";
          x.style.height = "100px";
          x.style.borderRadius = "50%";
          (document.getElementById('photoprofile') as HTMLFormElement).appendChild(x);
          var output = document.getElementById('pp');

          (output as HTMLFormElement)['src'] = reader.result;
          // @ts-ignore
          localStorage.setItem("profile-photoo", reader.result);
        };
        reader.readAsDataURL(_event.target.files[0]);

      };
      loadFile(event);

    };
    input.click();


  }

  picdiscard() {

    if (localStorage.getItem("capture") == "2") {

      localStorage.setItem("capture", "1")
      // @ts-ignore
      document.getElementById("pic1").innerHTML = "";


    }

    if (localStorage.getItem("capture") == "3") {
      localStorage.setItem("capture", "2")
      // @ts-ignore
      document.getElementById("pic2").innerHTML = "";
    }

    if (localStorage.getItem("capture") == "4") {
      localStorage.setItem("capture", "3")
      // @ts-ignore
      document.getElementById("pic3").innerHTML = "";
    }

    if (localStorage.getItem("capture") == "5") {
      localStorage.setItem("capture", "4")
      // @ts-ignore
      document.getElementById("pic4").innerHTML = "";
    }

    if (localStorage.getItem("capture") == "6") {
      localStorage.setItem("capture", "5")
      // @ts-ignore
      document.getElementById("pic5").innerHTML = "";
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


  selectm() {
    // @ts-ignore
    document.getElementById("bs").style.display = "none"
    // @ts-ignore
    if (document.getElementById("manl").value == "Ariana") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = '<select id="mun class="form-select" aria-label="Sélectionnez municipalité">  <option value="Ariana">Ariana</option>  <option value="La Soukra">La Soukra</option>  <option value="Raoued">Raoued</option>  <option value="Kalâat el-Andalous">Kalâat el-Andalous</option>  <option value="Sidi Thabet">Sidi Thabet</option>  <option value="Ettadhamen-Mnihla">Ettadhamen-Mnihla</option></select>'
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Béja") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Béja">Béja</option>  <option value="El Maâgoula">El Maâgoula</option>  <option value="Zahret Medien">Zahret Medien</option>  <option value="Nefza">Nefza</option>  <option value="Téboursouk">Téboursouk</option>  <option value="Testour">Testour</option>  <option value="Goubellat">Goubellat</option>  <option value="Majaz al Bab">Majaz al Bab</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Ben Arous") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Ben Arous">Ben Arous</option>  <option value="El Mourouj">El Mourouj</option>  <option value="Hammam Lif">Hammam Lif</option>  <option value="Hammam Chott">Hammam Chott</option>  <option value="Bou Mhel el-Bassatine">Bou Mhel el-Bassatine</option>  <option value="Ezzahra">Ezzahra</option>  <option value="Radès">Radès</option>  <option value="Mégrine">Mégrine</option>  <option value="Mohamedia-Fouchana">Mohamedia-Fouchana</option>  <option value="Mornag">Mornag</option>  <option value="Khalidia">Khalidia</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Bizerte") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Bizerte">Bizerte</option>  <option value="Sejnane">Sejnane</option>  <option value="Mateur">Mateur</option>  <option value="Menzel Bourguiba">Menzel Bourguiba</option>  <option value="Tinja">Tinja</option>  <option value="Ghar al Milh">Ghar al Milh</option>  <option value="Aousja">Aousja</option>  <option value="Menzel Jemil">Menzel Jemil</option>  <option value="Menzel Abderrahmane">Menzel Abderrahmane</option>  <option value="El Alia">El Alia</option>  <option value="Ras Jebel">Ras Jebel</option>  <option value="Metline">Metline</option>  <option value="Raf Raf">Raf Raf</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Gabès") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Gabès">Gabès</option>  <option value="Chenini Nahal">Chenini Nahal</option>  <option value="Ghannouch">Ghannouch</option>  <option value="Métouia">Métouia</option>  <option value="Oudhref">Oudhref</option>  <option value="El Hamma">El Hamma</option>  <option value="Matmata">Matmata</option>  <option value="Nouvelle Matmata">Nouvelle Matmata</option>  <option value="Mareth">Mareth</option>  <option value="Zarat">Zarat</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Gafsa") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Gafsa">Gafsa</option>  <option value="El Ksar">El Ksar</option>  <option value="Moularès">Moularès</option>  <option value="Redeyef">Redeyef</option>  <option value="Métlaoui">Métlaoui</option>  <option value="Mdhila">Mdhila</option>  <option value="El Guettar">El Guettar</option>  <option value="Sened">Sened</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Jendouba") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Jendouba">Jendouba</option>  <option value="Bou Salem">Bou Salem</option>  <option value="Tabarka">Tabarka</option>  <option value="Aïn Draham">Aïn Draham</option>  <option value="Fernana">Fernana</option>  <option value="Beni MTir">Beni MTir</option>  <option value="Ghardimaou">Ghardimaou</option>  <option value="Oued Melliz">Oued Melliz</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Kairouan") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Kairouan">Kairouan</option>  <option value="Chebika">Chebika</option>  <option value="Sbikha">Sbikha</option>  <option value="Oueslatia">Oueslatia</option>  <option value="Aïn Djeloula">Aïn Djeloula</option>  <option value="Haffouz">Haffouz</option>  <option value="Alaâ">Alaâ</option>  <option value="Hajeb El Ayoun">Hajeb El Ayoun</option>  <option value="Nasrallah">Nasrallah</option>  <option value="Menzel Mehiri">Menzel Mehiri</option>  <option value="Echrarda">Echrarda</option>  <option value="Bou Hajla">Bou Hajla</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Kasserine") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="El Ayoun">El Ayoun</option>  <option value="Ezzouhour">Ezzouhour</option>  <option value="Fériana">Fériana</option>  <option value="Foussana">Foussana</option>  <option value="Haïdra">Haïdra</option>  <option value="Hassi El-Ferid">Hassi El-Ferid</option>  <option value="Jedelienne">Jedelienne</option>  <option value="Kasserine Nord">Kasserine Nord</option>  <option value="Kasserine Sud">Kasserine Sud</option>  <option value="Majel Bel Abbès">Majel Bel Abbès</option>  <option value="Sbeïtla">Sbeïtla</option>  <option value="Sbiba">Sbiba</option>  <option value="Thala">Thala</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Kebili") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Kebili">Kebili</option>  <option value="Djemna">Djemna</option>  <option value="Douz">Douz</option>  <option value="El Golâa">El Golâa</option>  <option value="Souk Lahad">Souk Lahad</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Kasserine") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = '<select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="El Ayoun">El Ayoun</option>  <option value="Ezzouhour">Ezzouhour</option>  <option value="Fériana">Fériana</option>  <option value="Foussana">Foussana</option>  <option value="Haïdra">Haïdra</option>  <option value="Hassi El Ferid">Hassi El Ferid</option>  <option value="Jedelienne">Jedelienne</option>  <option value="Kasserine Nord">Kasserine Nord</option>  <option value="Kasserine Sud">Kasserine Sud</option>  <option value="Majel Bel Abbès">Majel Bel Abbès</option>  <option value="Sbeïtla">Sbeïtla</option>  <option value="Sbiba">Sbiba</option>  <option value="Thala">Thala</option></select>'
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Kef") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="El Kef">El Kef</option>  <option value="Nebeur">Nebeur</option>  <option value="Touiref">Touiref</option>  <option value="Sakiet Sidi-Youssef">Sakiet Sidi-Youssef</option>  <option value="Tajerouine">Tajerouine</option>  <option value="Menzel Salem">Menzel Salem</option>  <option value="Kalaat es-Senam">Kalaat es-Senam</option>  <option value="Kalâat Khasba">Kalâat Khasba</option>  <option value="Jérissa">Jérissa</option>  <option value="El Ksour">El Ksour</option>  <option value="Dahmani">Dahmani</option>  <option value="Sers">Sers</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Mahdia") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Mahdia">Mahdia</option>  <option value="Rejiche">Rejiche</option>  <option value="Bou Merdes">Bou Merdes</option>  <option value="Ouled Chamekh">Ouled Chamekh</option>  <option value="Chorbane">Chorbane</option>  <option value="Hebira">Hebira</option>  <option value="Essouassi">Essouassi</option>  <option value="El Djem">El Djem</option>  <option value="Kerker">Kerker</option>  <option value="Chebba">Chebba</option>  <option value="Melloulèche">Melloulèche</option>  <option value="Sidi Alouane">Sidi Alouane</option>  <option value="Ksour Essef">Ksour Essef</option>  <option value="El Bradâa">El Bradâa</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Manouba") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Manouba">Manouba</option>  <option value="Den Den">Den Den</option>  <option value="Douar Hicher">Douar Hicher</option>  <option value="Oued Ellil">Oued Ellil</option>  <option value="Mornaguia">Mornaguia</option>  <option value="Borj El-Amri">Borj El-Amri</option>  <option value="Djedeida">Djedeida</option>  <option value="Tebourba">Tebourba</option>  <option value="El Battan">El Battan</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Medenine") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Medenine">Medenine</option>  <option value="Beni Khedache">Beni Khedache</option>  <option value="Ben Gardane">Ben Gardane</option>  <option value="Zarzis">Zarzis</option>  <option value="Houmt El-Souk-(Djerba)">Houmt El-Souk-(Djerba)</option>  <option value="Midoun (Djerba)">Midoun (Djerba)</option>  <option value="Ajim (Djerba)">Ajim (Djerba)</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Monastir") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Bekalta">Bekalta</option>  <option value="Bembla">Bembla</option>  <option value="Beni Hassen">Beni Hassen</option>  <option value="Jemmal">Jemmal</option>  <option value="Ksar Hellal">Ksar Hellal</option>  <option value="Ksibet el-Médiouni">Ksibet el-Médiouni</option>  <option value="Moknine">Moknine</option>  <option value="Monastir">Monastir</option>  <option value="Ouerdanine">Ouerdanine</option>  <option value="Sahline">Sahline</option>  <option value="Sayada-Lamta-Bou Hajar">Sayada-Lamta-Bou Hajar</option>  <option value="Téboulba">Téboulba</option>  <option value="Zéramdine">Zéramdine</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Nabeul") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Azmour">Azmour</option>  <option value="Béni Khalled">Béni Khalled</option>  <option value="Béni Khiar">Béni Khiar</option>  <option value="Bou Argoub">Bou Argoub</option>  <option value="Dar Allouch">Dar Allouch</option>  <option value="Dar Châabane">Dar Châabane</option>  <option value="El Haouaria">El Haouaria</option>  <option value="El Maâmoura">El Maâmoura</option>  <option value="El Mida">El Mida</option>  <option value="Grombalia">Grombalia</option>  <option value="Hammam Ghezèze">Hammam Ghezèze</option>  <option value="Hammamet">Hammamet</option>  <option value="Kélibia">Kélibia</option>  <option value="Korba">Korba</option>  <option value="Korbous">Korbous</option>  <option value="Menzel Bouzelfa">Menzel Bouzelfa</option>  <option value="Menzel Horr">Menzel Horr</option>  <option value="Menzel Temime">Menzel Temime</option>  <option value="Nabeul">Nabeul</option>  <option value="Soliman">Soliman</option>  <option value="Somâa">Somâa</option>  <option value="Takelsa">Takelsa</option>  <option value="Tazarka">Tazarka</option>  <option value="Zaouief Djedidi">Zaouief Djedidi</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Sfax") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Sfax">Sfax</option>  <option value="Sakiet Ezzit">Sakiet Ezzit</option>  <option value="Chihia">Chihia</option>  <option value="Sakiet Eddaïer">Sakiet Eddaïer</option>  <option value="Gremda">Gremda</option>  <option value="El Ain">El Ain</option>  <option value="Thyna">Thyna</option>  <option value="Agareb">Agareb</option>  <option value="Jebiniana">Jebiniana</option>  <option value="El Hencha">El Hencha</option>  <option value="Menzel Chaker">Menzel Chaker</option>  <option value="Ghraïba-Tunisia">Ghraïba-Tunisia</option>  <option value="Bir Ali-Ben-Khélifa">Bir Ali-Ben-Khélifa</option>  <option value="Skhira">Skhira</option>  <option value="Mahares">Mahares</option>  <option value="Kerkennah">Kerkennah</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Sidi Bouzid") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Bir El-Hafey">Bir El-Hafey</option>  <option value="Cebbala Ouled-Asker">Cebbala Ouled-Asker</option>  <option value="Jilma">Jilma</option>  <option value="Menzel Bouzaiane">Menzel Bouzaiane</option>  <option value="Meknassy">Meknassy</option>  <option value="Mezzouna">Mezzouna</option>  <option value="Ouled Haffouz">Ouled Haffouz</option>  <option value="Regueb">Regueb</option>  <option value="Sidi Ali-Ben-Aoun">Sidi Ali-Ben-Aoun</option>  <option value="Sidi Bouzid-(capital)">Sidi Bouzid-(capital)</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Siliana") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Siliana">Siliana</option>  <option value="Bou Arada">Bou Arada</option>  <option value="Gaâfour">Gaâfour</option>  <option value="El Krib">El Krib</option>  <option value="Sidi Bou-Rouis">Sidi Bou-Rouis</option>  <option value="Maktar">Maktar</option>  <option value="Rouhia">Rouhia</option>  <option value="Kesra">Kesra</option>  <option value="Bargou">Bargou</option>  <option value="El Aroussa">El Aroussa</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Sousse") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Sousse">Sousse</option>  <option value="Ksibet Thrayet">Ksibet Thrayet</option>  <option value="Ezzouhour">Ezzouhour</option>  <option value="Zaouiet Sousse">Zaouiet Sousse</option>  <option value="Hammam Sousse">Hammam Sousse</option>  <option value="Akouda">Akouda</option>  <option value="Kalâa Kebira">Kalâa Kebira</option>  <option value="Sidi Bou-Ali">Sidi Bou-Ali</option>  <option value="Hergla">Hergla</option>  <option value="Enfidha">Enfidha</option>  <option value="Bouficha">Bouficha</option>  <option value="Sidi El-Hani">Sidi El-Hani</option>  <option value="Msaken">Msaken</option>  <option value="Kalâa Seghira">Kalâa Seghira</option>  <option value="Messaadine">Messaadine</option>  <option value="Kondar">Kondar</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Tataouine") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Tataouine">Tataouine</option>  <option value="Bir Lahmar">Bir Lahmar</option>  <option value="Ghomrassen">Ghomrassen</option>  <option value="Dehiba">Dehiba</option>  <option value="Remada">Remada</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Tozeur") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Tozeur">Tozeur</option>  <option value="Degache">Degache</option>  <option value="Hamet Jerid">Hamet Jerid</option>  <option value="Nafta">Nafta</option>  <option value="Tamerza">Tamerza</option></select> '
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Tunis") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = '<select id="mun" class="form-select" aria-label="Sélectionnez municipalité>  <option value="Carthage">Carthage</option> <option value="Carthage">Carthage</option>  <option value="La Goulette">La Goulette</option>  <option value="La Marsa">La Marsa</option>  <option value="Le Bardo">Le Bardo</option>  <option value="Le Kram">Le Kram</option>  <option value="Sidi Bou-Saïd">Sidi Bou-Saïd</option>  <option value="Sidi Hassine">Sidi Hassine</option>  <option value="Tunis">Tunis</option></select>'
    }

    // @ts-ignore
    if (document.getElementById("manl").value == "Zaghouan") {
      // @ts-ignore
      document.getElementById("mun").innerHTML = ' <select id="mun" class="form-select" aria-label="Sélectionnez municipalité">  <option value="Zaghouan">Zaghouan</option>  <option value="Zriba">Zriba</option>  <option value="Bir Mcherga">Bir Mcherga</option>  <option value="Djebel Oust">Djebel Oust</option>  <option value="El Fahs">El Fahs</option>  <option value="Nadhour">Nadhour</option></select> '
    }
    this.selecta()



  }

  selecta() {
    // @ts-ignore
    if (document.getElementById("mun").value == "Tunis") {
             // @ts-ignore
             document.getElementById("bs").style.display = "block"
      // @ts-ignore
      document.getElementById("bs").innerHTML = '             <select  id="bs"  class="form-select" aria-label="Sélectionnez municipalité municipaux">              <option value="Bab Bhar">Bab Bhar</option>              <option value="La Médina">La Médina</option>              <option value="Bab souika">Bab souika</option>              <option value="Sidi Béchir">Sidi Béchir</option>              <option value="Essijoumi">Essijoumi</option>              <option value="El Omrane">El Omrane</option>              <option value="Cité El khadra">Cité El khadra</option>              <option value="El Ouardia">El Ouardia</option>              <option value="Ezzouhour">Ezzouhour</option>              <option value="Ettahrir">Ettahrir</option>              <option value="El Omrane Superieur">El Omrane Superieur</option>              <option value="El Menzah">El Menzah</option>              <option value="Jebel Jelloud">Jebel Jelloud</option>              <option value="El Kabaria">El Kabaria</option>              <option value="El Hrairia">El Hrairia</option>              <option value="Service central de létat civil">Service central de létat civil</option>            </select> '
    }

    // @ts-ignore
    if (document.getElementById("mun").value == "Le Bardo") {
             // @ts-ignore
             document.getElementById("bs").style.display = "block"
      // @ts-ignore
      document.getElementById("bs").innerHTML = '    <select  id="bs"  class="form-select" aria-label="Sélectionnez municipalité municipaux">              <option value="Le Bardo">Le Bardo</option>              <option value="Ksar Saïd">Ksar Saïd</option>      <option value="Al Hadiqa">Al Hadiqa</option>        </select> '
    }

    // @ts-ignore
    if (document.getElementById("mun").value == "La Goulette") {
             // @ts-ignore
             document.getElementById("bs").style.display = "block"
      // @ts-ignore
      document.getElementById("bs").innerHTML = '    <select  id="bs"  class="form-select" aria-label="Sélectionnez municipalité municipaux">              <option value="La Goulette">La Goulette</option>              <option value="Cité Tayeb-Mehiri">Cité Tayeb-Mehiri</option>          </select> '
    }

    // @ts-ignore
    if (document.getElementById("mun").value == "Le Kram") {
             // @ts-ignore
             document.getElementById("bs").style.display = "block"
      // @ts-ignore
      document.getElementById("bs").innerHTML = '    <select  id="bs"  class="form-select" aria-label="Sélectionnez municipalité municipaux">              <option value=" Le Kram-Est"> Le Kram-Est</option>              <option value="Ksar Saïd">Ksar Saïd</option>              <option value="Le Kram-Ouest">Le Kram-Ouest</option>          </select> '
    }

    // @ts-ignore
    if (document.getElementById("mun").value == "La Marsa") {
             // @ts-ignore
             document.getElementById("bs").style.display = "block"
      // @ts-ignore
      document.getElementById("bs").innerHTML = '    <select  id="bs"  class="form-select" aria-label="Sélectionnez municipalité municipaux">              <option value="Gammarth">Gammarth</option>              <option value="La Marsa-Médina">La Marsa-Médina</option>              <option value="La Marsa-Erriadh">La Marsa-Erriadh</option>          </select> '
    }

    // @ts-ignore
    if (document.getElementById("mun").value == "Ariana") {
             // @ts-ignore
             document.getElementById("bs").style.display = "block"
      // @ts-ignore
      document.getElementById("bs").innerHTML = '    <select  id="bs"  class="form-select" aria-label="Sélectionnez municipalité municipaux">              <option value="El Manzah">El Manzah</option>              <option value="Ariana-Médina">Ariana-Médina</option>              <option value="Ariana Supérieur">Ariana Supérieur</option>     <option value="Ennasr">Ennasr</option>       </select> '
    }

    // @ts-ignore
    if (document.getElementById("mun").value == "La Soukra") {
             // @ts-ignore
             document.getElementById("bs").style.display = "block"
      // @ts-ignore
      document.getElementById("bs").innerHTML = '    <select  id="bs"  class="form-select" aria-label="Sélectionnez municipalité municipaux">              <option value="Borj El-Wazir">Borj El-Wazi</option>              <option value="Parc">Parc</option>              <option value="Ariana Supérieur">Ariana Supérieur</option>     <option value="Ennasr">Ennasr</option>       </select> '
    }

    // @ts-ignore
    if (document.getElementById("mun").value == "Raoued") {
             // @ts-ignore
             document.getElementById("bs").style.display = "block"
      // @ts-ignore
      document.getElementById("bs").innerHTML = '    <select  id="bs"  class="form-select" aria-label="Sélectionnez municipalité municipaux">              <option value="Cité La-Gazelle">Cité La-Gazelle</option>              <option value="Sidi Omer">Sidi Omer</option>              <option value="Ariana Supérieur">Ariana Supérieur</option>     <option value="Ennasr">Ennasr</option>       </select> '
    }

    // @ts-ignore
    if (document.getElementById("mun").value == "Ben Arous") {
             // @ts-ignore
             document.getElementById("bs").style.display = "block"
      // @ts-ignore
      document.getElementById("bs").innerHTML = '    <select  id="bs"  class="form-select" aria-label="Sélectionnez municipalité municipaux">              <option value="Sidi Mosbeh">Sidi Mosbeh</option>              <option value="Medina Jedida">Medina Jedida</option>              <option value="Ben Arous-Charguia">Ben Arous-Charguia</option>     <option value="Ennasr">Ben Arous-Gharbia</option>       </select> '
    }
  }

  // @ts-ignore
  selecttype(stra, strb) {

    if (localStorage.getItem("selecttypea") != "") {
      var ka = localStorage.getItem("selecttypea")
      var kb = localStorage.getItem("selecttypeb")
      // @ts-ignore
      document.getElementById(ka).innerHTML = ' <div class="col" > <div  (click)="selecttype(' + "'" + ka + "'" + ',' + "'" + kb + "'" + ')" id="' + ka + '" class=" card shadow-lg mb-3 bg-light text-center"style="max-width: 10rem; max-height: 6rem; "> <div class="card-body"> <img src="/assets/img/' + ka + '.png" width="50" height="50" alt=""> <h5 style="color:black; font-size:small;">' + kb + '</h5>  </div> </div> </div>'
    }
    localStorage.setItem("selecttypea", stra)
    localStorage.setItem("selecttypeb", strb)
    var ka = localStorage.getItem("selecttypea")
    var kb = localStorage.getItem("selecttypeb")

    // @ts-ignore
    document.getElementById(ka).innerHTML = ' <div class="col" >  <div (click)="selecttype(' + "'" + ka + "'" + ',' + "'" + kb + "'" + ')" id="' + ka + '" class=" card shadow-lg mb-3 text-center"style="max-width: 10rem; max-height: 6rem; background-color:#75c612">  <div class="card-body"> <img src="/assets/img/' + ka + '.png" width="50" height="50" alt=""> <h5 style="color:white; font-size:small;">' + kb + '</h5>  </div> </div>  </div>'



  }

  aboutme() {
    alert("GreenCity est une application Web mobile hybride permettant de signaler les problèmes civils/environnementaux quotidiens ou de les consulter ainsi que d'autres informations. \n\n Développé par : Mohamed Dhia Jebali et Aymen Masmoudi \n Fabriqué à partir de SSS Innovation Startup \n\n Votre version actuelle : v" + localStorage.getItem("oldversion"))

  }

}

