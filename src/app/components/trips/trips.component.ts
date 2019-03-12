import { Component, OnInit, Input } from '@angular/core';
import { StationsService } from './../stations/stations.service';
import { CountdownService } from './../countdown/countdown.service';
import { MapService } from './../map/map.service';
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

  public source: any = {};
  public dest: any = {};

  public origin: any;
  public destination: any;

  intervalId: number;

  constructor(private stationsService: StationsService, private tripsService: TripsService, private countdownService: CountdownService, private mapService: MapService) {} 

  ngOnInit() {
  	this.loadStations();
    this.intervalId = setInterval(() => { 
      this.getTrips(); 
      this.getStationInfo(); 
    }, 30000);
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

    this.source = this.stationsSelected.source;
    this.dest = this.stationsSelected.destination;

    if(this.source && this.source.abbr && this.dest && this.dest.abbr && this.source.abbr !== this.dest.abbr) {
      return this.tripsService.getTrips(this.source.abbr, this.dest.abbr).subscribe((data: {}) => {
        this.schedule = data;
        this.countdownService.initiateTimer(this.schedule.request.trip[0]['@origTimeMin']);
        this.getDirection();
      })
    }
  }

  // Get source station info
  getStationInfo() {
    if(this.source && this.source.abbr) {
      return this.stationsService.getStation(this.source.abbr).subscribe((data: {}) => {
        this.station = data;
        console.log(data);
      })
    }
  }

  getDirection() {
    this.origin = { lat: parseFloat(this.source.gtfs_latitude), lng: parseFloat(this.source.gtfs_longitude) };
    this.destination = { lat: parseFloat(this.dest.gtfs_latitude), lng: parseFloat(this.dest.gtfs_longitude) };
  }

}
