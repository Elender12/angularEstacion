import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationbiciComponent } from './stationbici/stationbici.component';
import { BiciListComponent } from './bici-list/bici-list.component';


const routes: Routes = [
  {path: 'stationbici', component: StationbiciComponent},
  {path: 'biciList/:id', component: BiciListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationBiciRoutingModule { }
