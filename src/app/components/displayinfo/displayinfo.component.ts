import { Component, Input } from '@angular/core';

interface IdataWeather {
	id: number,
	date: Date | null,
	temperature: number,
	dateWeek: string,
};

@Component({
	selector: 'app-displayinfo',
	templateUrl: './displayinfo.component.html',
	styleUrl: './displayinfo.component.scss'
})

export class DisplayinfoComponent {

	@Input() toggleOne: boolean = true;
	

	listData: IdataWeather[]= [
		{id: 1, date: new Date(), temperature: 28, dateWeek: 'Monday'},
		{id: 2, date: new Date(), temperature: 30, dateWeek: 'Tuesday'},
		{id: 3, date: new Date(), temperature: 27, dateWeek: 'Wednesday'},
		{id: 4, date: new Date(), temperature: 29, dateWeek: 'Thursday'},
		{id: 5, date: new Date(), temperature: 31, dateWeek: 'Friday'}
];
}
