import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StationsComponent } from './components/stations/stations.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
    { path: 'stations', component: StationsComponent }
    // { path: '', redirectTo: '/stations', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [ HomeComponent ]