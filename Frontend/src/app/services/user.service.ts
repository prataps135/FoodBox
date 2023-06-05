import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:1500/api/v1/user";

  constructor(
    private http:HttpClient
  ) { }

  getByEmail(email:string):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${email}`);
  }

  getAllUser():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }

  getByid(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/id/${id}`);
  }

  updateUser(id:number,user:User):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,user);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
