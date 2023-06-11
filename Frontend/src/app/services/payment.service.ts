import { Injectable } from '@angular/core';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentDetails:Card;
  constructor() { }

  setPaymentDetails(payment:any){
    this.paymentDetails = payment;
  }

  getPaymentDetails():any{
    return this.paymentDetails;
  }
}
