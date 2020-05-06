import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user-register/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

 //attributes
 loginUserForm: FormGroup;
 email: string = "";
 password: string = "";

 constructor(private userService: UserService,
   private fb: FormBuilder,
   private router: Router) {
 }

 ngOnInit(): void {

 }

 userLogin() {
   //Can I do this in another place??
   this.loginUserForm = this.fb.group({
     'email': this.email,
     'password': this.password
   });
   //create a new user and pass it to the service
   let loggedUser: User = new User(this.loginUserForm.value);
   //boolean answer to the action
   let loginResult = this.userService.login(loggedUser);
   
   if (loginResult) {
     //user is registered
     this.router.navigateByUrl('/control-panel/control-panel');
   } else {
     //user is not registered
     this.router.navigateByUrl('/user-auth/error');
   }
 }
}
