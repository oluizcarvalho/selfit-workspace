import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'self-form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss'],
})
export class FormInputTextComponent {
  @ViewChild('input') input: ElementRef = {} as any;

  @Input() appearance: MatFormFieldAppearance = 'outline';

  @Input() label: string = '';

  @Input() autoWidth: boolean = false;

  @Input() readonly: boolean = false;

  @Input() password: boolean = false;

  @Input() maskInput: string = '';

  @Input() minValue!: string;

  @Input() prefix: string = '';

  @Input() suffix: string = '';

  @Input() specialCharacters: boolean = false;

  @Input() options: object = {};

  @Input() autocomplete: string = 'off';

  @Input() currency: boolean = false;

  @Input() formGroupInput: any = '' as any;

  @Input() formControlName: any = '' as any;

  @Input() selected: string = '';

  @Input() type: string = '';

  @Input() id: string = '';

  @Input() name: string = '';

  @Output() selectedChange = new EventEmitter();

  @Output() onFocus = new EventEmitter();

  @Output() onBlur = new EventEmitter();

  @Output() onKeyup = new EventEmitter();

  hide: boolean = true;

  selectedChangeValue(val: any) {
    this.selectedChange.emit(val);
  }

  onFocusTrigger() {
    this.onFocus.emit(true);
  }

  onBlurTrigger() {
    this.onBlur.emit(true);
  }

  onKeyupTrigger() {
    this.onKeyup.emit(true);
  }

  focusTrigger() {
    this.input.nativeElement.focus();
  }

  returnElementInput() {
    return this.input.nativeElement;
  }

  get getCustomError(): boolean {
    return this.formGroupInput.controls[this.formControlName].hasError('customErro') || false;
  }

  get getCustomMessageError(): string {
    return this.formGroupInput.controls[this.formControlName].getError('customErro') || '';
  }
}
