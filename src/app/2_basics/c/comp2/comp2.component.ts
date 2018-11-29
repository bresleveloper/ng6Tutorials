import { Component, OnInit } from '@angular/core';
import { BasicServiceMultiService } from '../../basic-service-multi.service';
import { BasicServiceService } from '../../basic-service.service';

@Component({
  selector: 'basics-comp2',
  //templateUrl: './comp2.component.html',
  templateUrl: '../comp1/comp1.component.html',
  styleUrls: ['./comp2.component.css', '../comp1/comp1.component.css'],
  providers:[BasicServiceMultiService]

})
export class Comp2Component implements OnInit {

  title="component 2"

  constructor(public s1:BasicServiceService, public s2: BasicServiceMultiService) { }

  ngOnInit() {
  }

  increment(){
    this.s1.o["a"]++;
    this.s2.value++;
  }
}
