import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {

  constructor() { }

}


@Directive({
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HighlightDirective {
  private _defaultColor = 'blue';
  private el: HTMLElement;

  constructor(el: ElementRef) { this.el = el.nativeElement; }

  @Input('myHighlight') highlightColor: string;

  onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor); }
  onMouseLeave() { this.highlight(null); }

  private highlight(color:string) {
    this.el.style.backgroundColor = color;
  }

}