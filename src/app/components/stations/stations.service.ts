import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Station } from './station.model';
import { Configuration } from './../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
	
	private apiURL: string;

	httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};

  	constructor(private http: HttpClient, private configuration: Configuration) {
  		this.apiURL = configuration.server + 'stations';
  	}

  	getStations(): Observable<Station> {
	    return this.http.get<Station>(this.apiURL)
	    .pipe(
	      retry(1),
	      catchError(this.handleError)
	    )
	}

	handleError(error) {
	     let errorMessage = '';
	     if(error.error instanceof ErrorEvent) {
	       // Get client-side error
	       errorMessage = error.error.message;
	     } else {
	       // Get server-side error
	       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
	     }
	     window.alert(errorMessage);
	     return throwError(errorMessage);
	}
}
