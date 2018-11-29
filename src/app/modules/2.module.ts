import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { Comp1Component } from '../2_basics/c/comp1/comp1.component';
import { RootBasicsComponent } from '../2_basics/c/root-basics/root-basics.component';
import { Comp2Component } from '../2_basics/c/comp2/comp2.component';
import { InlineCompComponent } from '../2_basics/c/inline-comp/inline-comp.component';

import { BasicDirectiveDirective } from '../2_basics/basic-directive.directive';



@NgModule({
  declarations: [
    Comp1Component,
    RootBasicsComponent,
    Comp2Component,
    InlineCompComponent,
    BasicDirectiveDirective
  ],

  imports: [
    CommonModule
  ],
  exports: [
    Comp1Component,
    RootBasicsComponent,
    Comp2Component,
    InlineCompComponent,
    BasicDirectiveDirective
  ],
})
export class Module_2_basics { }
