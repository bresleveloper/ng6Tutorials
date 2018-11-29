import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboardComponent } from '../3_material/my-dashboard/my-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AddrFormComponent } from '../3_material/addr-form/addr-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyDashboardComponent,
    AddrFormComponent,


  ],

  imports: [
    CommonModule,

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
  exports: [
    MyDashboardComponent,
    AddrFormComponent,

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
})
export class Module_3_Mat { }
