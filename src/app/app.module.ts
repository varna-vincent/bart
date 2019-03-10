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
import { HomeComponent } from './components/home/home.component';
import { StationsComponent } from './components/stations/stations.component';
import { TripsComponent } from './components/trips/trips.component';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HomeComponent,
    StationsComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
