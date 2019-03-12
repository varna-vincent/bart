import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';            
import { AgmDirectionModule } from 'agm-direction';

import { HomeComponent } from './components/home/home.component';
import { StationsComponent } from './components/stations/stations.component';
import { TripsComponent } from './components/trips/trips.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HomeComponent,
    StationsComponent,
    TripsComponent,
    CountdownComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyD3u4KtwEugomr45KkWV4px6d9Qqlc2240',
    }),
    AgmDirectionModule
  ],
  providers: [Configuration, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
