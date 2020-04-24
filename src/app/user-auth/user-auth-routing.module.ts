import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  //ruta más chiquitina
  {path: 'register', component: UserregisterComponent},
  {path: 'login', component: UserloginComponent},
  {path: 'menu', component: UsermenuComponent},
  {path: 'userpage', component: UserpageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
