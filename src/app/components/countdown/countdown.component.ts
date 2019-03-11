import { Component, OnInit, Input } from '@angular/core';
import { CountdownService } from './countdown.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input() trainArrivalTime: string;

  constructor( private countdownService: CountdownService ) {}

  ngOnInit() {
  	this.countdownService.initiateTimer(this.trainArrivalTime)
  }

}
