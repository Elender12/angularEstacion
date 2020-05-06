import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationBiciRoutingModule } from './station-bici-routing.module';
import { StationListComponent } from './station-list/station-list.component';
import { StationCitiesComponent } from './station-cities/station-cities.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [StationListComponent, StationCitiesComponent],
  imports: [
    CommonModule,
    StationBiciRoutingModule,
    FormsModule,
    PaginationModule.forRoot(),
    NgxPaginationModule
  ]
})
export class StationBiciModule { }
