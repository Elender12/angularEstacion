import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'app-root', pathMatch:'full'},
  {path: 'user-auth',
    loadChildren: () => import('./user-auth/user-auth.module').then(m=>m.UserAuthModule)
  },
  {path: 'control-panel', 
    loadChildren: () => import('./control-panel/control-panel.module').then(m=>m.ControlPanelModule)
  },
  {path: 'station-bici',
  loadChildren: () => import('./station-bici/station-bici.module').then(m=>m.StationBiciModule)
},
{path: 'cities-map',
loadChildren: () => import('./maps/maps.module').then(m=>m.MapsModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
