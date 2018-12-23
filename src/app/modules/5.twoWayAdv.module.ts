import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HoverDirectiveDirective, HighlightDirective } from '../5_twoWayMethods/hover-directive.directive';
import { LaCompaComponent } from '../5_twoWayMethods/la-compa/la-compa.component';
import { MypipePipe } from '../5_twoWayMethods/mypipe.pipe';
import { NgForFilterComponent, BookFilterPipe } from '../5_twoWayMethods/ng-for-filter/ng-for-filter.component';


@NgModule({
  declarations: [
    HoverDirectiveDirective,
    LaCompaComponent,
    HighlightDirective,
    MypipePipe,
    NgForFilterComponent,
    BookFilterPipe
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
    NgForFilterComponent,
    BookFilterPipe



  ],
})
export class Module_5_twoWayAdv { }
