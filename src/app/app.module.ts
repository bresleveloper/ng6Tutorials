import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Module_2_basics } from './modules/2.module';
import { Module_3_Mat } from './modules/3.mat.module';
import { Module_4_Intern } from './modules/4.intern.module';
import { Module_5_twoWayAdv } from './modules/5.twoWayAdv.module';
import { ObsyComponent } from './5_twoWayMethods/obsy/obsy.component';
import { MethodsComponent } from './6_async/methods/methods.component';







@NgModule({
  declarations: [
    AppComponent,
    ObsyComponent,
    MethodsComponent,




  ],
  imports: [
    BrowserModule,
    Module_2_basics,
    Module_3_Mat,
    Module_4_Intern,
    Module_5_twoWayAdv,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
