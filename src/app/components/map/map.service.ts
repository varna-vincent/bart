import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
	
  public origin: any;
  public destination: any;

  constructor() { }

  getDirection(slatitude, slongitude, dlatitude, dlongitude) {
	
	this.origin = { lat: parseFloat(slatitude), lng: parseFloat(slongitude) };
	this.destination = { lat: parseFloat(dlatitude), lng: parseFloat(dlongitude) };
  }
}
