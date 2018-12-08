import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bindings-basics',
  templateUrl: './bindings-basics.component.html',
  styleUrls: ['./bindings-basics.component.css']
})
export class BindingsBasicsComponent implements OnInit {

  titleOne='I am your Title One'

  htmlOne='<h1>I am your Title binded as html</h1>'

  someFn(){
    alert('OMG you clicked me!!')
  }

  generatecolor():string{
    return '#' + new Date().getMilliseconds().toString() + new Date().getMilliseconds().toString();
  }
  generateem():string{
    return (1 + Math.random()).toString();
  }

  oStyles={
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
  }
  oClasses={
    aquaColor: true,
    blackBG: true,
  }


  constructor() { }

  ngOnInit() {
  }

}
