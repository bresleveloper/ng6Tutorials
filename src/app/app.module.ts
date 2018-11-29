import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Module_2_basics } from './modules/2/2.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AddFormComponent } from './3_material/add-form/add-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    AddFormComponent,

  ],
  imports: [
    BrowserModule,




    Module_2_basics,




    BrowserAnimationsModule,




    MatGridListModule,




    MatCardModule,




    MatMenuModule,




    MatIconModule,




    MatButtonModule,




    LayoutModule,




    MatInputModule,




    MatSelectModule,




    MatRadioModule,




    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
