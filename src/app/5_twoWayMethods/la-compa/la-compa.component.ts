import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-compa',
  templateUrl: './la-compa.component.html',
  styleUrls: ['./la-compa.component.css']
})
export class LaCompaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
