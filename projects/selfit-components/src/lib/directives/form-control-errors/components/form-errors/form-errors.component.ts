import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'app-form-errors',
	templateUrl: './form-errors.component.html',
	styleUrls: ['./form-errors.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorsComponent {
	text: any;

	hide: boolean = true;

	@Input() set textInput(value: any) {
		if (value !== this.text) {
			this.text = value;

			this.hide = !value;

			this.changeDetectorRef.detectChanges();
		}
	}

	constructor(public changeDetectorRef: ChangeDetectorRef) {}
}
