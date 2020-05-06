import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationCitiesComponent } from './station-cities/station-cities.component';
import { StationListComponent } from './station-list/station-list.component';


const routes: Routes = [
  {path: 'station-cities', component: StationCitiesComponent},
  {path: 'station-list/:id', component: StationListComponent}  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationBiciRoutingModule { }
