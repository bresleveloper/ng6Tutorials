import { Component, OnInit } from '@angular/core';
import { Input, SimpleChange, SimpleChanges ,
    OnChanges, DoCheck,AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'nested-zaidy',
  templateUrl: './zaidy.component.html',
  styleUrls: ['./zaidy.component.css']
})
export class ZaidyComponent 

implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { console.log('ZaidyComponent constructor'); }
  ngOnChanges(changes:SimpleChanges) { console.log('ZaidyComponent ngOnChanges'); console.log(changes);  }
  ngOnInit() { console.log('ZaidyComponent ngOnInit');  }
  ngDoCheck() { console.log('ZaidyComponent ngDoCheck');  }
  ngAfterContentInit() { console.log('ZaidyComponent ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('ZaidyComponent ngAfterContentChecked'); }
  ngAfterViewInit() { console.log('ZaidyComponent ngAfterViewInit');  }
  ngAfterViewChecked() { console.log('ZaidyComponent ngAfterViewChecked'); }
  ngOnDestroy() { console.log('ZaidyComponent ngOnDestroy');  }

}
