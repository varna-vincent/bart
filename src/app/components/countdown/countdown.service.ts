import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
	
  public hourInterval: any;
  public minInterval: any;
  public secInterval: any;

  constructor() { }

  initiateTimer(trainArrivalTime) {

  	clearInterval(this.hourInterval);
  	clearInterval(this.minInterval);
  	clearInterval(this.secInterval);

	trainArrivalTime = moment(trainArrivalTime, "hh:mm a");
	console.log(trainArrivalTime);
	let now = moment.now();
	let duration = moment.duration(trainArrivalTime.diff(now));
	console.log(duration);

	let hourCountdownNumberEl = document.getElementById('hour-countdown-number');
	let hourCountdown = duration.get('hour');
	hourCountdownNumberEl.textContent = hourCountdown.toString();

	let minCountdownNumberEl = document.getElementById('min-countdown-number');
	let minCountdown = duration.get('minute');
	minCountdownNumberEl.textContent = minCountdown.toString();

  	let secCountdownNumberEl = document.getElementById('sec-countdown-number');
	let secCountdown = duration.get('second');
	secCountdownNumberEl.textContent = secCountdown.toString();

	this.hourInterval = setInterval(function() {
	  hourCountdown = --hourCountdown <= 0 ? 0 : hourCountdown;
	  hourCountdownNumberEl.textContent = hourCountdown.toString();
	}, 3600000);

	this.minInterval = setInterval(function() {
	  minCountdown = --minCountdown <= 0 ? 0 : minCountdown;
	  minCountdownNumberEl.textContent = minCountdown.toString();
	}, 60000);

	this.secInterval = setInterval(function() {
	  secCountdown = --secCountdown <= 0 ? 60 : secCountdown;
	  secCountdownNumberEl.textContent = secCountdown.toString();
	}, 1000);
  }
}
