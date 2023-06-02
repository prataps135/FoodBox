import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth:string;
  constructor() { }

  setAuth(auth:string):void{
    this.auth = auth;
    // console.log("Auth changed to",this.auth);
  }

  getAuth():string{
    // console.log("current auth is",this.auth);
    return this.auth;
  }
}
