import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Module_2_basics } from './modules/2.module';
import { Module_3_Mat } from './modules/3.mat.module';
import { Module_4_Intern } from './modules/4.intern.module';
import { Module_5_twoWayAdv } from './modules/5.twoWayAdv.module';
import { Module_6_Async } from './modules/6.async.module';
import { LoginComponent } from './forms/login/login.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    
    Module_2_basics,
    Module_3_Mat,
    Module_4_Intern,
    Module_5_twoWayAdv,
    Module_6_Async,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
