import { Component, OnInit, Input } from '@angular/core';
import { StationsService } from './../stations/stations.service';
import { TripsService } from './trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})

export class TripsComponent implements OnInit {
	
  @Input() stationsSelected = { source: {}, destination: {} }

  public stations: any = [];
  public station: any = [];
  public schedule: any = [];

  constructor(private stationsService: StationsService, private tripsService: TripsService) {} 

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

  // Get trips list
  getTrips() {
    return this.tripsService.getTrips(this.stationsSelected.source.abbr, this.stationsSelected.destination.abbr).subscribe((data: {}) => {
      this.schedule = data;
      console.log(data);
    })
  }

  // Get source station info
  getStationInfo() {
    return this.stationsService.getStation(this.stationsSelected.source.abbr).subscribe((data: {}) => {
      this.station = data;
      console.log(data);
    })
  }

}
