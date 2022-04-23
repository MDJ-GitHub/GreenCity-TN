import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ar-report',
  templateUrl: './ar-report.component.html',
  styleUrls: ['./ar-report.component.css']
})
export class ArReportComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    localStorage.setItem("step", "1");
    localStorage.setItem("capture", "1");

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
      this.getLocation()
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
      return;
    }





  }
  nextx() {



    if ((document.getElementById("step5") as HTMLFormElement)) {
      (document.getElementById("b2") as HTMLFormElement).innerHTML =
        '    <div id="b2" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';

      (document.getElementById("step5") as HTMLFormElement).innerHTML =
        '    <h5 id="step5" class="text-center"> Signaler</h5>';
    }

    if ((document.getElementById("step4") as HTMLFormElement)) {
      (document.getElementById("b5") as HTMLFormElement).innerHTML =
        '    <div id="b5" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';

      (document.getElementById("cardstep") as HTMLFormElement).innerHTML =
        '    <div id="cardstep" class="card text-white bg-primary mb-3" style="max-width: 30rem; max-height: 9rem;"> <h5 class="card-header">5 - Vérification </h5> <div class="card-body"> <p class="card-text">Envoyez le rapport du problème avec la vérification de votre compte. <img src="/assets/img/sendicon.png" width="50" height="50" style="float: right;" alt=""></p></div></div>';


      (document.getElementById("step4") as HTMLFormElement).id = "step5"
    }

    if ((document.getElementById("step3") as HTMLFormElement)) {
      (document.getElementById("b4") as HTMLFormElement).innerHTML =
        '    <div id="b4" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';

      (document.getElementById("cardstep") as HTMLFormElement).innerHTML =
        '    <div id="cardstep" class="card text-white bg-primary mb-3" style="max-width: 30rem; max-height: 9rem;"> <h5 class="card-header">4 - Descriptions </h5> <div class="card-body"> <p class="card-text">Fournissez les informations nécessaires qui décrivent le mieux le problème. <img src="/assets/img/infoicon.png" width="50" height="50" style="float: right;" alt=""></p></div></div>';

      (document.getElementById("step3") as HTMLFormElement).id = "step4"
    }


    if ((document.getElementById("step2") as HTMLFormElement)) {
      (document.getElementById("b3") as HTMLFormElement).innerHTML =
        '    <div id="b3" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';

      (document.getElementById("cardstep") as HTMLFormElement).innerHTML =
        '    <div id="cardstep" class="card text-white bg-primary mb-3" style="max-width: 30rem; max-height: 9rem;"> <h5 class="card-header">3 - Type </h5> <div class="card-body"> <p class="card-text">Sélectionnez le bon type de problème. <img src="/assets/img/alerticon.png" width="50" height="50" style="float: right;" alt=""></p></div></div>';

      (document.getElementById("step2") as HTMLFormElement).id = "step3"
    }

    if ((document.getElementById("step") as HTMLFormElement)) {
      (document.getElementById("b2") as HTMLFormElement).innerHTML =
        '    <div id="b2" class="inline-block"> <img  src="/assets/img/slotf.png" width="30" height="30" class="center" alt=""> </div>';

      (document.getElementById("cardstep") as HTMLFormElement).innerHTML =
        '    <div id="cardstep" class="card text-white bg-primary mb-3" style="max-width: 30rem; max-height: 9rem;"> <h5 class="card-header">2 - Localisation </h5> <div class="card-body"> <p class="card-text">Sélectionnez la localisation du problème, actuel ou un autre. <img src="/assets/img/locationicon.png" width="50" height="50" style="float: right;" alt=""></p></div></div>';


      (document.getElementById("step") as HTMLFormElement).id = "step2"



    }
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;


      })}}

  capture() {

    if (localStorage.getItem("capture") == "1") {
      let div = document.getElementById('capture');
      html2canvas(div as HTMLFormElement).then(
      
        function (canvas: any) {
 
          canvas.style.width = "207px";
          canvas.style.height ="210px";


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
          (document.getElementById('pic5') as HTMLFormElement).appendChild(canvas);

        })
      localStorage.setItem("capture", "6");


      return;


    }





  }

  picupload() {

    if (localStorage.getItem("capture") == "1") {
    }

    if (localStorage.getItem("capture") == "2") {
    }

    if (localStorage.getItem("capture") == "3") {
    }

    if (localStorage.getItem("capture") == "4") {
    }

    if (localStorage.getItem("capture") == "5") {
    }


  }

}


