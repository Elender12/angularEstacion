import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from '../userregister/user.mode';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  //attributes
  loginUserForm: FormGroup;
  email: string = "";
  password: string = "";

  constructor(private userService: UserServiceService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {

  }

  userLogin() {
    //??Esto se puede hacer en algún otro sitio?
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
      this.router.navigateByUrl('/control-panel/panelcontrol');
    } else {
      //user is not registered
      this.router.navigateByUrl('/user-auth/menu');
    }
  }

}
