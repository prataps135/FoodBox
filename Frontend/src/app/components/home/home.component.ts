import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from 'src/app/model/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: Product[];
  searchedProduct: Product[];
  auth: string;

  constructor(
    private productService: ProductService,
    private authService: AuthenticationService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      data => {
        this.product = data;
        this.searchedProduct = this.product;
      },
      err => console.log('This is error ', err)
    );
    this.auth = this.authService.getAuth();

  }

  addProductToCart(product: Product) {
    this.cartService.setProduct(product);
    this.notificationService.showSuccess(`${product.name} added to cart`, "Foodbox");
  }

  search(key: string) {
    if (!key) {
      this.searchedProduct = this.product;
    }
    this.searchedProduct = this.product.filter(
      product => product.name.toLowerCase().includes(key.toLowerCase())
    );
  }
}
