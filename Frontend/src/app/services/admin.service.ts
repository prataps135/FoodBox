import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string = "http://localhost:1500/api/v1/admin";

  constructor(
    private http: HttpClient
  ) { }

  getAllAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl);
  }

  ngOnInit(): void {

  }
}
