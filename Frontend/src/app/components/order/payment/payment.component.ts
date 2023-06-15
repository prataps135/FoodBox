import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/model/card';
import { NotificationService } from 'src/app/services/notification.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payment: number;
  paymentForm: FormGroup;
  paymentDetails: Card;
  allCardDetails: any[] = [];
  paymentStatus: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.paymentDetails = new Card;
    this.payment = this.activatedRoute.snapshot.params['amount'];
    this.paymentStatus = false;
    this.paymentForm = new FormGroup({
      cardNo: new FormControl(''),
      expiry: new FormControl(''),
      nameOnCard: new FormControl(''),
      cvv: new FormControl(''),
    });

    this.paymentService.getAllCardsDetail().subscribe(
      data => {
        this.allCardDetails = data,
          console.log(data)
      },
      err => console.log(err)
    );
  }

  generateBill() {
    this.router.navigate(['bill']);
  }

  onSubmit() {
    this.setPayDetails();
    this.paymentService.setPaymentDetails(this.paymentDetails);
    for (let card of this.allCardDetails) {
      if (card.nameOnCard === this.paymentDetails.nameOnCard &&
        card.cardNo === this.paymentDetails.cardNo) {
        this.paymentStatus = true;
        break;
      } else {
        this.paymentStatus = false;
      }
    }
    if (this.paymentStatus === true) {
      this.notificationService.showSuccess("Payment Done", "Foodbox");
      setTimeout(() => {
        this.generateBill();
      }, 3000);
    } else {
      this.notificationService.showError("Invalid Details", "Foodbox");
    }
  }

  setPayDetails() {
    this.paymentDetails.cardNo = this.cardNo?.value;
    this.paymentDetails.cvv = this.cvv?.value;
    this.paymentDetails.expiry = this.paymentDetails?.expiry;
    this.paymentDetails.nameOnCard = this.nameOnCard?.value;
    console.log(this.paymentDetails);
  }

  get cardNo() {
    return this.paymentForm.get('cardNo');
  }

  get cvv() {
    return this.paymentForm.get('cvv');
  }

  get expiry() {
    return this.paymentForm.get('expiry');
  }

  get nameOnCard() {
    return this.paymentForm.get('nameOnCard');
  }
}
