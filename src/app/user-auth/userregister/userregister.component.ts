import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user.mode';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

    //save data
    userForm: FormGroup;
    nameField: AbstractControl;
    generoField: AbstractControl;
    surnameField: AbstractControl;
    emailField: AbstractControl;
    passwordField: AbstractControl;
    birthField: AbstractControl;
  
    constructor(private fb: FormBuilder,
                private userService: UserServiceService,
                private router: Router) {
       this.userForm =  this.fb.group({
          //objeto donde definimos los campos de nuestor formulario
          //orden parametros: 'valor por defecto-inicializado', validaciones, 
            'name': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            'apellidos': ['', Validators.compose([Validators.required])],
            'genero': ['', Validators.required],
            'email': ['', Validators.email],
            'password': ['', Validators.compose([Validators.required,passwordValidator])],
            'birth': ['', Validators.required]
        });
          this.nameField= this.userForm.controls['name'];
          this.surnameField= this.userForm.controls['apellidos'];
          this.generoField= this.userForm.controls['genero'];
          this.emailField= this.userForm.controls['email'];
          this.passwordField= this.userForm.controls['password'];
          this.birthField= this.userForm.controls['birth'];
     }
  ngOnInit(): void {
  }

  registerUser(){
    //create a new user
    let newUser: User = new User(this.userForm.value);
    //save user through the service
    let  signupResult = this.userService.signup(newUser);
    if(signupResult){
      this.router.navigateByUrl('/user-auth/login');
      console.log(newUser);
    }else{
      alert('Este usuario ya existe!!!!!!!');
     // this.router.navigateByUrl('');
    }
    //
 
  }

}

//
function passwordValidator(control: AbstractControl): { [s: string]:boolean }{
  //checks if the password is correct
   let regex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
  if( !control.value.match(regex)){
    return{ invalidPass: true};
  }
}
