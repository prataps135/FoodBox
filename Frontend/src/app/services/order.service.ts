import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { User } from '../model/user';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl: string = "http://localhost:1500/api/v1/orders";

  constructor(
    private http: HttpClient,
    private cartService:CartService
  ) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  addOrder(order:Order):Observable<any>{
    return this.http.post(this.baseUrl,order);
  }

  updateStatus(order:Order):Observable<any>{
    return this.http.put(this.baseUrl,order);
  }

}
