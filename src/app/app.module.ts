import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Module_2_basics } from './modules/2/2.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,




    Module_2_basics
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
