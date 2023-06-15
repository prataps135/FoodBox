import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentDetails: Card;
  private _url:string ='assets/card-details.json'; 

  constructor(
    private _http:HttpClient
  ) { }

  setPaymentDetails(payment: any) {
    this.paymentDetails = payment;
  }

  getPaymentDetails(): any {
    return this.paymentDetails;
  }

  getAllCardsDetail(): Observable<any[]> {
    return this._http.get<any[]>(this._url);
  }
}
