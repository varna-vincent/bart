import { Component, OnInit, Input } from '@angular/core';
import { StationsService } from './../stations/stations.service';
import { TripsService } from './trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})

export class TripsComponent implements OnInit {
	
  @Input() stationsSelected = { source: { abbr: '' }, destination: { abbr: '' } }

  public stations: any = [];
  public station: any = [];
  public schedule: any = [];
  intervalId: number;

  constructor(private stationsService: StationsService, private tripsService: TripsService) {} 

  ngOnInit() {
  	this.loadStations();
    this.intervalId = setInterval(() => { this.getTrips(); this.getStationInfo(); }, 30000);
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
    let source = this.stationsSelected.source;
    let dest = this.stationsSelected.destination;
    if(source && source.abbr && dest && dest.abbr && source.abbr !== dest.abbr) {
      return this.tripsService.getTrips(source.abbr, dest.abbr).subscribe((data: {}) => {
        this.schedule = data;
        console.log(data);
      })
    }
  }

  // Get source station info
  getStationInfo() {
    if(this.stationsSelected.source && this.stationsSelected.source.abbr) {
      return this.stationsService.getStation(this.stationsSelected.source.abbr).subscribe((data: {}) => {
        this.station = data;
        console.log(data);
      })
    }
  }

}
