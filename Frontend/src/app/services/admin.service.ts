import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { Observable, ObservableLike } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl: string = "http://localhost:1500/api/v1/admin";

  constructor(
    private http: HttpClient
  ) { }

  getAllAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl);
  }

  getByEmail(email:string):Observable<Admin>{
    return this.http.get<Admin>(`${this.baseUrl}/${email}`);
  }

  addAdmin(admin:Admin):Observable<any>{
    return this.http.post(this.baseUrl,admin);
  }

  getById(id:number):Observable<Admin>{
    return this.http.get<Admin>(`${this.baseUrl}/id/${id}`);
  }
  
  updateAdmin(id:number,admin:Admin):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,admin);
  }

  deleteAdmin(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
