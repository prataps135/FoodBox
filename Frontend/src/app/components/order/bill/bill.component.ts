import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  finalProducts: Product[];
  currentUser: User;
  subTotal: number;
  sgst: number;
  cgst: number;
  grandTotal: number;
  invoiceNo: number;
  date: Date;
  order: Order;

  constructor(
    private authService: AuthenticationService,
    private cartService: CartService,
    private productService: ProductService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.currentUser = new User;
    this.currentUser = this.authService.getUser();
    this.finalProducts = this.cartService.getFinalProductList();
    this.calculateBill();
    this.invoiceNo = Math.floor(Math.random() * 10000);
    this.date = new Date;
    this.order = new Order;
    this.addItemstoOrderList();
  }

  calculateBill() {
    let total = 0;
    for (let product of this.finalProducts) {
      total = total + (product.counter * product.price);
    }
    this.subTotal = total;
    this.sgst = this.subTotal * 9 / 100;
    this.cgst = this.subTotal * 9 / 100;
    this.grandTotal = this.subTotal + this.sgst + this.cgst;
  }

  addItemstoOrderList() {
    for (let product of this.finalProducts) {
      this.order.invoiceNo = this.invoiceNo;
      this.order.productName = product.name;
      this.order.quantity = product.counter;
      this.order.amount = product.counter * product.price;
      this.order.time = this.date;
      this.order.status = "pending";
      this.order.userName = this.currentUser.name;
      this.order.address = `${this.currentUser.address.street},${this.currentUser.address.city},${this.currentUser.address.zipcode}`;

      // calling service to add
      this.orderService.addOrder(this.order).subscribe(
        data => console.log(data),
        err => console.log("This is error", err)
      );
    }
  }
}
