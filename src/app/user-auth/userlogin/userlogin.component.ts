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


  //atributos
  
 loginUserForm: FormGroup;
  // email: AbstractControl;
  // password: AbstractControl;
  fb1: FormBuilder;
    email: string = "";
    password: string = "";
  constructor(private userService: UserServiceService,
              private fb: FormBuilder,
              private router: Router) {
               }

  ngOnInit(): void {
  
  }
 
  userLogin(){
    //??Esto se puede hacer en algún otro sitio?
    this.loginUserForm= this.fb.group({
          'email': this.email,
          'password': this.password
      });
    let loggedUser: User = new User(this.loginUserForm.value);
    let login = this.userService.login(loggedUser);
    if(login){
      this.router.navigateByUrl('/control-panel/panelcontrol');
    }else{
      this.router.navigateByUrl('/user-auth/menu');
    }
  }

}
