import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[submitFormButton]',
})
export class SubmitFormButtonDirective {
	constructor(private elementRef: ElementRef) {}

	@HostListener('document:keydown.enter', ['$event'])
	onKeydownHandler(event: KeyboardEvent) {
		this.elementRef.nativeElement.click();
	}
}
