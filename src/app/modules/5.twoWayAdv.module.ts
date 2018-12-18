import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HoverDirectiveDirective, HighlightDirective } from '../5_twoWayMethods/hover-directive.directive';
import { LaCompaComponent } from '../5_twoWayMethods/la-compa/la-compa.component';
import { MypipePipe } from '../5_twoWayMethods/mypipe.pipe';


@NgModule({
  declarations: [
    HoverDirectiveDirective,
    LaCompaComponent,
    HighlightDirective,
    MypipePipe,

  ],

  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [

    FormsModule,
    
    HoverDirectiveDirective,
    LaCompaComponent,
    HighlightDirective,
    MypipePipe,




  ],
})
export class Module_5_twoWayAdv { }
