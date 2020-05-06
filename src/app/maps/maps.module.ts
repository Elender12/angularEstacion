import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
import { CitiesMapComponent } from './cities-map/cities-map.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { StationMapComponent } from './station-map/station-map.component';



@NgModule({
  declarations: [CitiesMapComponent, StationMapComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    GoogleMapsModule,
  ]
})
export class MapsModule { }
