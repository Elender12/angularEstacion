import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesMapComponent } from './cities-map/cities-map.component';
import { StationMapComponent } from './station-map/station-map.component';




const routes: Routes = [
  {path: "map", component: CitiesMapComponent},
  {path: "station-map/:id", component: StationMapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    
  ],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
