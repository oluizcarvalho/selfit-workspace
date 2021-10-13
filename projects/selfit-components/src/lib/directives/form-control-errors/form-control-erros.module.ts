import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControlErrosDirective} from "./form-control-erros.directive";
import {FormErrorsComponent} from "./components/form-errors";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [FormErrorsComponent, FormControlErrosDirective],
  imports: [
    CommonModule,
    MatFormFieldModule
  ], exports: [FormControlErrosDirective]
})
export class FormControlErrosModule {
}
