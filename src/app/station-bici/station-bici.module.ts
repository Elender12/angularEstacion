import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationBiciRoutingModule } from './station-bici-routing.module';
import { StationbiciComponent } from './stationbici/stationbici.component';
import { BiciListComponent } from './bici-list/bici-list.component';


@NgModule({
  declarations: [StationbiciComponent, BiciListComponent],
  imports: [
    CommonModule,
    StationBiciRoutingModule
  ]
})
export class StationBiciModule { }
