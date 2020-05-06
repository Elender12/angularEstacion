import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: 'register', component: UserRegisterComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
