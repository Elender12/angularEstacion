import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationBiciRoutingModule } from './station-bici-routing.module';
import { StationbiciComponent } from './stationbici/stationbici.component';


@NgModule({
  declarations: [StationbiciComponent],
  imports: [
    CommonModule,
    StationBiciRoutingModule
  ]
})
export class StationBiciModule { }
