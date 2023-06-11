import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth: string;
  currentUser:User;
  // currentUser: User = {
  //   id:100,
  //   name:'Pratap Singh',
  //   email:'prataps135@gmail.com',
  //   password:'pratap@123',
  //   phoneNo:7877696954,
  //   address:{
  //     id:101,
  //     street:'jail road',
  //     city:'Bikaner',
  //     zipcode:994001
  //   }
  // };
  constructor() { }

  setAuth(auth: string): void {
    this.auth = auth;
    // console.log("Auth changed to",this.auth);
  }

  setUser(user: User): void {
    this.currentUser = user;
  }

  getUser(): User {
    return this.currentUser;
  }

  getAuth(): string {
    // console.log("current auth is",this.auth);
    return this.auth;
  }
}
