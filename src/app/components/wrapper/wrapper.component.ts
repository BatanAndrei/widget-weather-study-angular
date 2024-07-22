import { Component } from '@angular/core';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrl: './wrapper.component.scss'
})

export class WrapperComponent {
    nameButtonOne: string = 'На день';
    nameButtonMany: string = 'На неделю';
    textInput: string = ''
    toggleOne: boolean = true;
    toggleMany: boolean = false;
    text: string = '';

    checkValue(value: string): void {
        this.textInput = value;
    }

    handleOne() {
        this.toggleOne = false;
        this.toggleMany = true;
    }

    handleMany() {
        this.toggleMany = false;
        this.toggleOne = true;
    }
}
