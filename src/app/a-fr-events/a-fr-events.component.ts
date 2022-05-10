import { Component, OnInit,ElementRef } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-a-fr-events',
  templateUrl: './a-fr-events.component.html',
  styleUrls: ['./a-fr-events.component.css']
})
export class AFrEventsComponent implements OnInit {

  constructor(private elementRef:ElementRef,private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    localStorage.setItem("adminnom", "Mohamed Dhia Jebali")
    localStorage.setItem("adminloc", "Tunis")
        // @ts-ignore
    document.getElementById("cred").innerHTML = '   <div id="cred" class="text-end">    <img src="/assets/img/person-fill.png" width="25" height="25" style=" float: left;" alt=""> &nbsp;'+localStorage.getItem("adminnom")+'&nbsp;    <img src="/assets/img/location.png" width="20" height="25" class="d-inline-block align-top" alt=""> '+localStorage.getItem("adminloc")+' &nbsp; </div>' 
    localStorage.setItem("capture", "1");
    this.getInfo();
    localStorage.setItem("picc1","assets/img/empty.jpg");
    localStorage.setItem("picc2","assets/img/empty.jpg");
    localStorage.setItem("picc3","assets/img/empty.jpg");
    localStorage.setItem("picc4","assets/img/empty.jpg");
    localStorage.setItem("picc5","assets/img/empty.jpg");
  }

  refresh(): void {
    window. location. reload();
    }

  getInfo() {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  
    var loc = localStorage.getItem("adminloc") ;

      this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/events/"+loc+"/.json",httpOptions).subscribe(responseData => {
        console.log(responseData);

  if (typeof responseData =="object") {
  
    Object.entries(responseData).map(a => {
      console.log(a[1])
   // @ts-ignore
   document.getElementById("events").insertAdjacentHTML('afterbegin', ' <div id="'+a[0]+'div" class="card text-white bg-secondary mb-3">    <div class="card-body">      <h5 class="card-title"> '+a[1].title+' &nbsp;           <img src="/assets/img/calendar.png" width="20" height="20" style=" float: center;" alt=""> '+a[1].date+' &nbsp;           <img src="/assets/img/flag-fill.png" width="20" height="20" style=" float: center;" alt=""> '+a[1].date_mod+' &nbsp;           <img src="/assets/img/map.png" width="20" height="20" style=" float: center;" alt=""> '+a[1].location+' &nbsp;           <img src="/assets/img/plus.png" width="20" height="20" style=" float: center;" alt=""> '+a[1].mun+' <img  id="'+a[0]+'remove" (click)="remove('+"'"+ a[0]+"'"+')" src="/assets/img/remove.png" width="20" height="20" style="float: right;" alt="">     <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">        <img id="'+a[0]+'modify" (click)="modifyn('+"'"+ a[0]+"'"+')" src="/assets/img/modify.png" width="20" height="20" style="float: right;" alt="">        <img src="/assets/img/empty.png" width="10" height="10" style="float: right;" alt="">     </h5> &nbsp;      <p class="card-text">'+a[1].subject+'</p>      <p class="card-text bg-dark">'+a[1].description+'</p>      <hr>      <img src="'+a[1].picture1+'" width="150" height="125">      <img src="'+a[1].picture2+'" width="150" height="125">      <img src="'+a[1].picture3+'" width="150" height="125">      <img src="'+a[1].picture4+'" width="150" height="125">      <img src="'+a[1].picture5+'" width="150" height="125">    </div>  </div>');
   this.elementRef.nativeElement.querySelector('#'+ a[0]+'remove').addEventListener('click', this.remove.bind(this));
   this.elementRef.nativeElement.querySelector('#'+ a[0]+'modify').addEventListener('click', this.modifyn.bind(this));

          })
          ;
          }})
}
  
  

  // @ts-ignore
  remove(str) {

    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var loc = localStorage.getItem("adminloc") ;

    if (typeof str == "object") {
    var x = str.srcElement.id
    } else {x = str
      }
  
      x = x.replace('remove','');
      this.http.delete("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/events/"+loc+"/"+x+".json",httpOptions).subscribe(responseData => {
      this.refresh();

  }) }

 
  // @ts-ignore
  send() {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var loc = localStorage.getItem("adminloc") ;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 

    
   
   
        const object =  {
          title: (document.getElementById("titlex") as HTMLFormElement)['value'] ,
          subject: (document.getElementById("subjectx") as HTMLFormElement)['value'] ,
          description: (document.getElementById("descriptionx") as HTMLFormElement)['value'],
          location: loc,
          date_mod: time,
           // @ts-ignore
          date_en: (document.getElementById("date_enx") as HTMLFormElement)['value'] ,
          picture1 : localStorage.getItem("picc1"),
          picture2 : localStorage.getItem("picc2"),
          picture3 : localStorage.getItem("picc3"),
          picture4 : localStorage.getItem("picc4"),
          picture5 : localStorage.getItem("picc5"),
      }

      this.http.post("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/events/"+loc+".json",object,httpOptions).subscribe(responseDataa => {
        console.log(responseDataa);

    })


      }



      // @ts-ignore
modifyn(str) {
  const httpOptions = {
    headers: new HttpHeaders()
  }
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Content-Type', 'application/json');
  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 

  var loc = localStorage.getItem("adminloc") ;

  if (typeof str == "object") {
    var x = str.srcElement.id
    } else {x = str
      }
  
      x = x.replace('modifyn','');

      this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/events/"+loc+"/"+x+".json",httpOptions).subscribe(responseData => {

  if (typeof responseData =="object") {
  
 

   // @ts-ignore
   document.getElementById("events").insertAdjacentHTML('afterbegin', '<div id="'+x+'div" class="card text-white bg-secondary mb-3"> <div class="card-body"> <h5 class="card-title"> <label for="idtitlex">Title</label> <input type="text" class="form-control" id="idtitlex" placeholder="title"> <label for="idtitlex">Subject</label> <textarea type="textarea" class="form-control" id="idsubjectx" placeholder="subject" rows="3"></textarea> <label for="idtitlex">Desciption</label> <textarea type="textarea" class="form-control" id="iddescriptionx" placeholder="description" rows="5"></textarea> <label for="iddate_evx">Date de l"evènement</label> <textarea type="textarea" class="form-control" id="iddate_enx" placeholder="Date de l"évènement" rows="3"></textarea> <br> Nouvelles Images <br> <br> <button type="file" (click)="picupload()" accept="image/*" class="btn btn-success"> <img src="/assets/img/arrow-bar-up.png" width="30" height="25" style="filter: invert(1); float: left;" alt="">&nbsp; Télecharger</button> <br> <br> <div class=" row"> <div class="col" style="background-color: aliceblue;" id="pic1">&nbsp;</div>&nbsp; <div class="col" style="background-color: aliceblue;" id="pic2">&nbsp;</div>&nbsp; <div class="col" style="background-color: aliceblue;" id="pic3">&nbsp;</div>&nbsp; <div class="col" style="background-color: aliceblue;" id="pic4">&nbsp;</div>&nbsp; <div class="col" style="background-color: aliceblue;" id="pic5">&nbsp;</div> </div> <br><button type="file" (click)="modifyn('+"'"+ x +"'"+')" accept="image/*" class="btn text-end btn-warning"> <img src="/assets/img/arrow-bar-up.png" width="30" height="25" style="filter: invert(1); float: left;" alt="">&nbsp; Modifier</button></h5> </div></div> ');
    this.modify(x);

  }})


    



}


// @ts-ignore
modify(str) {
  const httpOptions = {
    headers: new HttpHeaders()
  }
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Content-Type', 'application/json');
  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 

  var loc = localStorage.getItem("adminloc") ;


  if (typeof str == "object") {
    var x = str.srcElement.id
    } else {x = str
      }
  
      x = x.replace('modify','');


  this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/events/"+loc+"/.json",httpOptions).subscribe(responseData => {
    console.log(responseData);

if (typeof responseData =="object") {


// @ts-ignore
document.getElementById("events").insertAdjacentHTML('afterbegin', ' <br><br><br> <div id="'+x+'div" <button type="file" (click)="modify('+"'"+ x +"'"+')" accept="image/*" class="btn text-end btn-warning"> <img src="/assets/img/arrow-bar-up.png" width="30" height="25" style="filter: invert(1); float: left;" alt="">&nbsp; Modifier</button></h5> </div></div> ');

  

      const object =  {
        title: (document.getElementById("idtitlex") as HTMLFormElement)['value'] ,
        subject: (document.getElementById("idsubjectx") as HTMLFormElement)['value'] ,
        description: (document.getElementById("iddescriptionx") as HTMLFormElement)['value'],
        location: loc,
        date_mod: time,
         // @ts-ignore
        date_en: (document.getElementById("iddate_enx") as HTMLFormElement)['value'] ,
         // @ts-ignore
        date: time,
        picture1 : localStorage.getItem("picc1"),
        picture2 : localStorage.getItem("picc2"),
        picture3 : localStorage.getItem("picc3"),
        picture4 : localStorage.getItem("picc4"),
        picture5 : localStorage.getItem("picc5"),
    }

    this.http.put("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/events/"+loc+"/"+x+".json",object,httpOptions).subscribe(responseDataa => {
    this.refresh();
  })


  }})



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

  showadd() {
                        // @ts-ignore
    if (document.getElementById("slideDiv").style.display == "block") {
        // @ts-ignore
      document.getElementById("slideDiv").style.display = "none"
    } else {
        // @ts-ignore
        document.getElementById("slideDiv").style.display = "block"
    }


  }


      }