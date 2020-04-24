import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';


const routes: Routes = [
  {path: 'panelcontrol', component: ControlpanelComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule { }
