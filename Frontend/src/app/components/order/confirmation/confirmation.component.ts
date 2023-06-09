import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  // @Input() grandTotal:number;

  total: number;
  grandTotal: number = 0;
  sgst:number=0;
  cgst:number=0;
  cartProducts: Product[];
  constructor(
    private cartService: CartService
  ) { }
  ngOnInit(): void {
    this.cartProducts = this.cartService.getProduct();
    let total = 0;
    for (let product of this.cartProducts) {
      total = total + (product.counter * product.price);
    }
    this.total = total
    console.log("Grand total = ", this.total);

    this.calculateBill();

  }

  calculateBill(){
    this.sgst = this.total * 9/100;
    this.cgst = this.total * 9/100;
    this.grandTotal = this.total + this.sgst + this.cgst;
  }
}
