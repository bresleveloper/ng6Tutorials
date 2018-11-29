import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basics-inline-comp',
  template: '<div class="blue"><h1>hi!</h1><p>all my template is inline</p></div>',
  styles: ['.blue{color:blue}']
})
export class InlineCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
