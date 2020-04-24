import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { UserAuthRoutingModule } from './user-auth-routing.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UserpageComponent } from './userpage/userpage.component';


@NgModule({
  declarations: [ UserloginComponent, UserregisterComponent, UsermenuComponent, UserpageComponent],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserAuthModule { }
