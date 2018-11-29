import { Component, OnInit } from '@angular/core';

import { BasicServiceMultiService } from '../../basic-service-multi.service';
import { BasicServiceService } from '../../basic-service.service';

@Component({
  selector: 'basics-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers:[BasicServiceMultiService]

})
export class Comp1Component implements OnInit {

  title="component 1"
  constructor(public s1:BasicServiceService, public s2: BasicServiceMultiService) { }

  ngOnInit() {
  }

  increment(){
    this.s1.o["a"]++;
    this.s2.value++;
  }

}
