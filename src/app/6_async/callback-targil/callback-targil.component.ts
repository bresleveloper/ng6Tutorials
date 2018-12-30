import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback-targil',
  templateUrl: './callback-targil.component.html',
  styleUrls: ['./callback-targil.component.css']
})
export class CallbackTargilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  pewpew(){
      setTimeout(this.thecallback, 1234);
  }


  thecallback(){
    let data = (document.getElementById('data') as HTMLInputElement).value
    document.getElementById('divi').innerHTML = data + data + data
  }

}
