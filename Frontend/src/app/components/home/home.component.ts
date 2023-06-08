import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  product:Product[];
  auth:string;
  
  constructor(
    private productService : ProductService,
    private authService: AuthenticationService,
    private cartService:CartService
  ){}

  ngOnInit(): void {
   this.productService.getAllProduct().subscribe(
    data=> this.product = data,
    err => console.log('This is error ',err)
   );   
   this.auth = this.authService.getAuth();
  }

  addProductToCart(product:Product){
    this.cartService.setProduct(product);
  }
}
