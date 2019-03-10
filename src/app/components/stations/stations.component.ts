import { Component, OnInit } from '@angular/core';
import { StationsService } from './stations.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})

export class StationsComponent implements OnInit {
	
  public stations: any = [];
  public message: string;
  public values: any[];

  constructor(private stationsService: StationsService) {
     this.message = 'Hello from HomeComponent constructor';
  } 

  ngOnInit() {
  	this.loadStations()
  }

   // Get stations list
  loadStations() {
    return this.stationsService.getStations().subscribe((data: {}) => {
      this.stations = data;
      console.log(data);
    })
  }

}
