import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input() trainArrivalTime: string;

  constructor() { }

  ngOnInit() {

	let trainArrivalTime = moment(this.trainArrivalTime, "hh:mm a");
	let now = moment.now();
	let duration = moment.duration(trainArrivalTime.diff(now));

	let hourCountdownNumberEl = document.getElementById('hour-countdown-number');
	let hourCountdown = duration.get('hour');
	hourCountdownNumberEl.textContent = hourCountdown.toString();

	let minCountdownNumberEl = document.getElementById('min-countdown-number');
	let minCountdown = duration.get('minute');
	minCountdownNumberEl.textContent = minCountdown.toString();

  	let secCountdownNumberEl = document.getElementById('sec-countdown-number');
	let secCountdown = duration.get('second');
	secCountdownNumberEl.textContent = secCountdown.toString();

	setInterval(function() {
	  hourCountdown = --hourCountdown <= 0 ? 60 : hourCountdown;
	  hourCountdownNumberEl.textContent = hourCountdown.toString();
	}, 3600000);

	setInterval(function() {
	  minCountdown = --minCountdown <= 0 ? 60 : minCountdown;
	  minCountdownNumberEl.textContent = minCountdown.toString();
	}, 60000);

	setInterval(function() {
	  secCountdown = --secCountdown <= 0 ? 60 : secCountdown;
	  secCountdownNumberEl.textContent = secCountdown.toString();
	}, 1000);
  }

}
