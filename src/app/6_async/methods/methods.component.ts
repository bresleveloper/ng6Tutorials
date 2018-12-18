import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { map } from 'rxjs/operators';


@Component({
  selector: 'async-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent implements OnInit {

  constructor(private zone:NgZone, private http:HttpClient) { }

  ngOnInit() {
  }

  getId():string{
    return (document.getElementById("itemid") as HTMLInputElement).value;
  }

  xhr:XMLHttpRequest;
  getNameByCallback(){
    this.xhr = new XMLHttpRequest();
    this.xhr.onreadystatechange = this.ajaxcallback;
    this.xhr.open('GET', 'https://raw.githubusercontent.com/bresleveloper/ng6Tutorials/master/src/app/6_async/data.json');
    this.xhr.send();
  }

  ajaxcallback(event) {
    //console.log(event)
    let xhr = event.currentTarget;
    //console.log(xhr)
    console.log(xhr.readyState + ' - ' + xhr.status)

    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      let arr:[] = response["response"]["data"];
      let id = (document.getElementById("itemid") as HTMLInputElement).value
      //let item = arr.find(x => x["id"] == this.getId())
      let item = arr.find(x => x["id"] == id)
      if (!item){
        document.getElementById("itemname").innerHTML = "not found"
      } else {
        document.getElementById("itemname").innerHTML = item["name"]
      }
    }
  }

  makePromiseAsyncAction(method, url){
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          //resolve(xhr.response);
          resolve(JSON.parse(xhr.response));
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }

  getNameByPromise(){
    let p = this.makePromiseAsyncAction('GET', 'https://raw.githubusercontent.com/bresleveloper/ng6Tutorials/master/src/app/6_async/data.json')
    let success = (json)=>{
      console.log('success')
      let arr:[] = json["response"]["data"];
      let id = (document.getElementById("itemid") as HTMLInputElement).value
      //let item = arr.find(x => x["id"] == this.getId())
      let item = arr.find(x => x["id"] == id)
        if (!item){
          document.getElementById("itemname").innerHTML = "not found"
        } else {
          document.getElementById("itemname").innerHTML = item["name"]
        }
    }
    p.then(success, console.error);
  }



  
  promiseSomthing(txt){
    var p = new Promise(function(resolve, reject) {
      //lets ajax with txt
      setTimeout(() => {
        let x = Math.random();
        console.log(x)
        if(x > 0.5) {
          resolve('foo promise to ' + txt);
        } else {
          reject({ failed: { reason: "bla bla wont promise " + txt } })
        }
      }, 300);
    });
    
    p.then((successValue:string) => {
      console.log(successValue);
      // expected output: "foo"
      document.getElementById("whatPromise").innerHTML = successValue;
    },
    (failValue:{}) => {
      console.log(failValue);
      // expected output: "foo"
      document.getElementById("whatPromise").innerHTML = failValue['failed']['reason'];

    });
    
    console.log(p);
    // expected output: [object Promise]
  }



  getNameByHttpClient(){
    this.http
      .get('https://raw.githubusercontent.com/bresleveloper/ng6Tutorials/master/src/app/6_async/data.json')
      .subscribe(data => {
        console.log(data)//auto cast to json
        let arr:[] = data["response"]["data"];
        let item = arr.find(x => x["id"] == this.getId())
        if (!item){
          document.getElementById("itemname").innerHTML = "not found"
        } else {
          document.getElementById("itemname").innerHTML = item["name"]
        }
      })

  }


}
