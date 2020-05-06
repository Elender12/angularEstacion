import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { UserAuthRoutingModule } from './user-auth-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent, ErrorComponent],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserAuthModule { }
