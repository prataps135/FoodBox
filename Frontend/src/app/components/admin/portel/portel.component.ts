import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-portel',
  templateUrl: './portel.component.html',
  styleUrls: ['./portel.component.scss']
})
export class PortelComponent {

  constructor(
    private userService:UserService,
    private adminService:AdminService,
    private router:Router
  ){}

  userList(){
    this.router.navigate(['user-list']);
  }

  adminList(){
    this.router.navigate(['admin-list']);
  }

  productList(){
    this.router.navigate(['product-list']);
  }

  orderList(){
    this.router.navigate(['order-list']);
  }

  addProduct(){
    this.router.navigate(['add-product']);
  }

  adminRegistration(){
    this.router.navigate(['admin-registration']);
  }
}
