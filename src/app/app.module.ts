import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Module_2_basics } from './modules/2.module';
import { Module_3_Mat } from './modules/3.mat.module';





@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    Module_2_basics,
    Module_3_Mat,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
