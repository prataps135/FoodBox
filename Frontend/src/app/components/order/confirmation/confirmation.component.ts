import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  // @Input() grandTotal:number;

  total: number;
  grandTotal: number = 0;
  sgst: number = 0;
  cgst: number = 0;
  cartProducts: Product[];
  currentUser: User;
  constructor(
    private cartService: CartService,
    private authService: AuthenticationService,
    private router:Router,
  ) { }
  ngOnInit(): void {
    this.currentUser = new User;
    this.cartProducts = this.cartService.getFinalProductList();
    let total = 0;
    for (let product of this.cartProducts) {
      total = total + (product.counter * product.price);
    }
    this.total = total
    console.log("Grand total = ", this.total);
    this.calculateBill();
    this.getUser();
  }

  calculateBill() {
    this.sgst = this.total * 9 / 100;
    this.cgst = this.total * 9 / 100;
    this.grandTotal = this.total + this.sgst + this.cgst;
  }

  getUser() {
    this.currentUser = this.authService.getUser();
  }

  payment(grandTotal:number):void{
    this.router.navigate([`payment-gateway/${grandTotal}`])
  }

  updateAddress(id:number):void{
    this.router.navigate([`update-user/${id}`]);
  }

}
