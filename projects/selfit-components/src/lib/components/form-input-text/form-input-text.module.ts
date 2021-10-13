import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputTextComponent } from './form-input-text.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {NgxCurrencyModule} from "ngx-currency";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControlErrosModule} from "../../directives";



@NgModule({
  declarations: [
    FormInputTextComponent
  ],
    imports: [
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
        NgxCurrencyModule,
        MatButtonModule,
        MatFormFieldModule,
        FormControlErrosModule
    ],
  exports: [
    FormInputTextComponent
  ]
})
export class FormInputTextModule { }
