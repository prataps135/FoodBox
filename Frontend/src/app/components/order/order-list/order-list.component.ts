import { Component,DoCheck,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit{
  orderList:Order[];
  currentStatus:string;
  statusControl :FormControl;
  statusList:string[]=["pending","confirmed","preparing","on the way","deliverd"];

  constructor(
    private orderService:OrderService
  ){}


  ngOnInit(): void {
      this.orderService.getAllOrders().subscribe(
        data => this.orderList = data,
        err => console.log("This is error",err)
      );

      this.statusControl = new FormControl('');
  }

  
  updateStatus(order:Order){
    order.status = this.statusControl.value;
    this.orderService.updateStatus(order).subscribe(
      data => alert("update successfully"),
      err => console.log("This is error",err)
    );
    
  }
}
