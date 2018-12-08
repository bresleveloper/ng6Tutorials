import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bindings-template-ref',
  templateUrl: './bindings-template-ref.component.html',
  styleUrls: ['./bindings-template-ref.component.css']
})
export class BindingsTemplateRefComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  call(value){
    alert(value +  ' : tu tu tuuuu ut')
  }
}
