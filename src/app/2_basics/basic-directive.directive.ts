import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[basicDirective]'
})
export class BasicDirectiveDirective {

   
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
 

}
