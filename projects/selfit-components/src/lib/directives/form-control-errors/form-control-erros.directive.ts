import { ComponentFactoryResolver, ComponentRef, Directive, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';

import { NgControl } from '@angular/forms';

import { FormErrorsComponent } from './components/form-errors';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Directive({
	selector: '[formControlName]',
})
export class FormControlErrosDirective implements OnInit, OnDestroy {
	defaultErrors: any = {
		required: (error: any) => `Este campo é obrigatório`,
		mask: (error: any) => `Valor inválido`,
		pattern: (error: any) => `Valor diferente do esperado`,
		email: (error: any) => `E-mail inválido`,
		cnpjOrCpf: (error: any) => `Valor do ${error} inválido`,
		cpf: (error: any) => `CPF é inválido`,
		customMessage: (error: any) => `${error}`,
		minlength: (error: any) => `O campo requer no mínimo ${error.requiredLength} caracteres`,
		maxlength: (error: any) => `O campo aceita no máximo ${error.requiredLength} caracteres`,
		passwords: (error: any) => `As senhas devem ser iguais`,
	};

	formErrorsComponent: ComponentRef<FormErrorsComponent> = '' as any;

	container: ViewContainerRef;

	timeOut: any = '' as any;

	constructor(
		public componentFactoryResolver: ComponentFactoryResolver,
		public ngControl: NgControl,
		public viewContainerRef: ViewContainerRef
	) {
		this.container = this.viewContainerRef;
	}

	ngOnInit() {
		this.ngControl.valueChanges?.pipe(untilDestroyed(this)).subscribe(() => {
			this.verifyErrors();

			if (this.timeOut) {
				clearInterval(this.timeOut);
			}

			this.timeOut = setTimeout(() => {
				this.verifyErrors();
			}, 700);
		});
	}

	verifyErrors() {
		const controlErrors = this.ngControl.errors;

		if (controlErrors) {
			const firstKey = Object.keys(controlErrors)[0];

			if (this.defaultErrors[firstKey]) {
				const getError = this.defaultErrors[firstKey];

				const text = getError(controlErrors[firstKey]);

				this.setError(text);
			}
		} else if (this.formErrorsComponent) {
			this.setError('');
		}
	}

	setError(text: string) {
		if (!this.formErrorsComponent) {
			const factoryResolver = this.componentFactoryResolver.resolveComponentFactory(FormErrorsComponent);

			this.formErrorsComponent = this.container.createComponent(factoryResolver);
		}

		this.formErrorsComponent.instance.textInput = text;
	}

	ngOnDestroy() {}
}
