import { Injectable } from '@angular/core';
import { User } from '../user-auth/userregister/user.mode';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  //lista de usuarios a guardar
  //private userList: User[] = [];

  private datoUsuario;

  constructor() { }

  signup(user: User):void{
    localStorage.setItem( user.email, JSON.stringify(user));
    //OLD
    //this.userList.push(user);
    

    console.log("este dato está en el navegador",this.datoUsuario);

  }
  login(user: User):  boolean{
    
    let incomingUserEmail: string = user.email;
    this.datoUsuario = JSON.parse(localStorage.getItem(user.email));
    console.log("entra al login");
    
    if(this.datoUsuario != null && this.datoUsuario.email == user.email && this.datoUsuario.password == user.password){
      return true;

    }
    
    //console.log(user.email," valores ", user.password);
   // this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));

      console.log(this.datoUsuario)
   
    // for (let index = 0; index < this.userList.length; index++) {
    //     if(this.userList[index].email == user.email && this.userList[index].password == user.password){
    //       return true;
    //     }      
    // }
    

  }


















}



/*registrar un usuario (método signup por ejemplo) y autenticar un usuario (método login por ejemplo). 
 * El de registrar guardara el usuario en el array de usuarios, y el de login buscara el usuario en dicho array. */