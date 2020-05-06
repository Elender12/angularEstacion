import { Injectable } from '@angular/core';
import { User } from '../user-auth/user-register/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private datoUsuario;
  constructor() { }
  signup(user: User): boolean{
    
    //OLD
    //this.userList.push(user);
    let newUserEmail: string = "";
    newUserEmail= user.email;
    if (this.checkIfUserExists(newUserEmail)){
      return false;

    }else {
      localStorage.setItem( user.email, JSON.stringify(user));
      return true;
    }
  }

  checkIfUserExists(userEmail: string): boolean{
    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      if(key == userEmail){
        return true;
      }
    }
  }

  login(user: User):  boolean{
    
    //let incomingUserEmail: string = user.email;
    this.datoUsuario = JSON.parse(localStorage.getItem(user.email));
    console.log("entra al login");
    if(this.datoUsuario != null && this.datoUsuario.email == user.email && this.datoUsuario.password == user.password){
      return true;

    }

}
}
