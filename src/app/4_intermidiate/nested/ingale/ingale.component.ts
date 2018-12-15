import { Component, Input, Output, EventEmitter, SimpleChanges ,OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'nested-ingale',
  templateUrl: './ingale.component.html',
  styleUrls: ['./ingale.component.css']
})
export class IngaleComponent 
          /*implements OnInit, OnChanges, DoCheck,
                      AfterContentInit, AfterContentChecked,
                      AfterViewInit, AfterViewChecked, OnDestroy*/ {

  something="edit something"

  tatyValue : string;

  @Output()
  tatyChange = new EventEmitter<string>();

  @Input()
  get taty(){
    return this.tatyValue;
  }
  set taty(val) {
    this.tatyValue = val;
    this.tatyChange.emit(this.tatyValue);
  }
  
  constructor() { console.log('IngaleComponent constructor'); }
  ngOnChanges(changes:SimpleChanges) { console.log('IngaleComponent ngOnChanges'); console.log(changes);  }
  ngOnInit() { console.log('IngaleComponent ngOnInit');  }
  ngDoCheck() { console.log('IngaleComponent ngDoCheck');  }
  ngAfterContentInit() { console.log('IngaleComponent ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('IngaleComponent ngAfterContentChecked'); }
  ngAfterViewInit() { console.log('IngaleComponent ngAfterViewInit');  }
  ngAfterViewChecked() { console.log('IngaleComponent ngAfterViewChecked'); }
  ngOnDestroy() { console.log('IngaleComponent ngOnDestroy');  }
}
