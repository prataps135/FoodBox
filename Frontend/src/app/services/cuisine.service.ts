import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuisine } from '../model/cuisine';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {

  constructor(
    private http:HttpClient
  ) { }

  private baseUrl:string = "http://localhost:1500/api/v1/cuisine";

  getAllCuisine():Observable<Cuisine[]>{
    return this.http.get<Cuisine[]>(this.baseUrl);
  }
}
