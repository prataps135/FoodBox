import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit{
  finalProducts:Product[];
  currentUser:User;
  subTotal:number;
  sgst:number;
  cgst:number;
  grandTotal:number;

  constructor(
    private authService:AuthenticationService,
    private cartService:CartService
  ){}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.finalProducts = this.cartService.getFinalProductList();
    this.calculateBill();
  }

  calculateBill(){
    let total = 0;
    for (let product of this.finalProducts) {
      total = total + (product.counter * product.price);
    }
    this.subTotal = total;
    this.sgst = this.subTotal * 9 / 100;
    this.cgst = this.subTotal * 9 / 100;
    this.grandTotal = this.subTotal + this.sgst + this.cgst;
  }

}
