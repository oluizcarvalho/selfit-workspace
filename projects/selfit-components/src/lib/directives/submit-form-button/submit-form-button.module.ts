import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubmitFormButtonDirective} from "./submit-form-button.directive";



@NgModule({
  declarations: [SubmitFormButtonDirective],
  imports: [
    CommonModule
  ], exports: [SubmitFormButtonDirective]
})
export class SubmitFormButtonModule { }
