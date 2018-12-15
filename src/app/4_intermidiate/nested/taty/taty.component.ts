import { Component, OnInit } from '@angular/core';
import { Input, SimpleChange, SimpleChanges ,OnChanges, DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'nested-taty',
  templateUrl: './taty.component.html',
  styleUrls: ['./taty.component.css']
})
export class TatyComponent 

implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { console.log('TatyComponent constructor'); }
  ngOnChanges(changes:SimpleChanges) { console.log('TatyComponent ngOnChanges'); console.log(changes);  }
  ngOnInit() { console.log('TatyComponent ngOnInit');  }
  ngDoCheck() { console.log('TatyComponent ngDoCheck');  }
  ngAfterContentInit() { console.log('TatyComponent ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('TatyComponent ngAfterContentChecked'); }
  ngAfterViewInit() { console.log('TatyComponent ngAfterViewInit');  }
  ngAfterViewChecked() { console.log('TatyComponent ngAfterViewChecked'); }
  ngOnDestroy() { console.log('TatyComponent ngOnDestroy');  }
}
