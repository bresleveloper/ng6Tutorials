import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ObsyComponent } from '../6_async/obsy/obsy.component';
import { MethodsComponent } from '../6_async/methods/methods.component';
import { CallbackTargilComponent } from '../6_async/callback-targil/callback-targil.component';


@NgModule({
  declarations: [
    ObsyComponent,
    MethodsComponent,
    CallbackTargilComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,

  ],
  exports: [

    HttpClientModule,
    ObsyComponent,
    MethodsComponent,
    CallbackTargilComponent




  ],
})
export class Module_6_Async { }
