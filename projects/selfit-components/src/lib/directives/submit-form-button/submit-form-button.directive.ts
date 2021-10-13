import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[SelfSubmitFormButton]',
})
export class SubmitFormButtonDirective {
	constructor(private elementRef: ElementRef) {}

	@HostListener('document:keydown.enter', ['$event'])
	onKeydownHandler(event: KeyboardEvent) {
		this.elementRef.nativeElement.click();
	}
}
