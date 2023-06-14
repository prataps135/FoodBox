import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cuisine } from 'src/app/model/cuisine';
import { Product } from 'src/app/model/product';
import { CuisineService } from 'src/app/services/cuisine.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  cuisines: Cuisine[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private cuisineService: CuisineService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.cuisineService.getAllCuisine().subscribe(
      data => this.cuisines = data,
      err => console.log("This is error", err)
    );
  }

  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe(
      data => this.notificationService.showSuccess("Product added successfully", "Foodbox"),
      err => {
        this.notificationService.showWarning("Can't able to add product", "Foodbox");
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    // console.log(this.product.cuisine);
    // console.log(form)

    if (form.invalid) {
      this.notificationService.showError("Please fill details properly", "Foodbox");
    } else {
      this.addProduct(this.product);
      setTimeout(() => {
        this.router.navigate(['product-list']);
      }, 3000);
    }
  }
}
