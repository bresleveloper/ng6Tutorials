import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ObsyComponent } from '../6_async/obsy/obsy.component';
import { MethodsComponent } from '../6_async/methods/methods.component';


@NgModule({
  declarations: [
    ObsyComponent,
    MethodsComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,

  ],
  exports: [

    HttpClientModule,
    ObsyComponent,
    MethodsComponent




  ],
})
export class Module_6_Async { }
