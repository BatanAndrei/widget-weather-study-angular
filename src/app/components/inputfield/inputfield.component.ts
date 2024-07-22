import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-inputfield',
	templateUrl: './inputfield.component.html',
	styleUrl: './inputfield.component.scss'
})
export class InputfieldComponent {
	@Output() changeValue = new EventEmitter<string>();

	checkValue(event: Event): void {
		const target = event.target as HTMLInputElement;
		this.changeValue.emit(target.value); 
	}
}
