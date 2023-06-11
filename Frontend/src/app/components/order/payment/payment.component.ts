import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/model/card';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payment: number;
  paymentForm: FormGroup;
  paymentDetails : Card;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private paymentService:PaymentService
  ) { }

  ngOnInit(): void {
    this.paymentDetails = new Card;
    this.payment = this.activatedRoute.snapshot.params['amount'];

    this.paymentForm = new FormGroup({
      cardNo: new FormControl(''),
      expiry: new FormControl(''),
      nameOnCard: new FormControl(''),
      cvv: new FormControl(''),
    });
  }

  generateBill() {
    this.router.navigate(['bill']);
  }

  onSubmit() {
    this.setPayDetails();
    this.paymentService.setPaymentDetails(this.paymentDetails);
    this.router.navigate(['bill']);
    // console.log(this.paymentService.getPaymentDetails());
  }

  setPayDetails(){
    this.paymentDetails.cardNo = this.cardNo?.value;
    this.paymentDetails.cvv = this.cvv?.value;
    this.paymentDetails.expiry = this.paymentDetails?.expiry;
    this.paymentDetails.nameOnCard = this.nameOnCard?.value;
    console.log(this.paymentDetails);
  }

  get cardNo(){
    return this.paymentForm.get('cardNo');
  }

  get cvv(){
    return this.paymentForm.get('cvv');
  }

  get expiry(){
    return this.paymentForm.get('expiry');
  }

  get nameOnCard(){
    return this.paymentForm.get('nameOnCard');
  }
}
