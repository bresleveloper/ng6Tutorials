import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IngaleComponent } from '../4_intermidiate/nested/ingale/ingale.component';
import { ZaidyComponent } from '../4_intermidiate/nested/zaidy/zaidy.component';
import { TatyComponent } from '../4_intermidiate/nested/taty/taty.component';

import { BindingsBasicsComponent } from '../4_intermidiate/bindings-basics/bindings-basics.component';
import { BindingsTemplateRefComponent } from '../4_intermidiate/bindings-template-ref/bindings-template-ref.component';



@NgModule({
  declarations: [
    IngaleComponent,
    ZaidyComponent,
    TatyComponent,
    BindingsBasicsComponent,
    BindingsTemplateRefComponent,



  ],

  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [

    FormsModule,
    

    IngaleComponent,
    ZaidyComponent,
    TatyComponent,
    BindingsBasicsComponent,
    BindingsTemplateRefComponent,





  ],
})
export class Module_3_Intern { }
