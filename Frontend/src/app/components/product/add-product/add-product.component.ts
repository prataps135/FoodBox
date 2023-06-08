import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuisine } from 'src/app/model/cuisine';
import { Product } from 'src/app/model/product';
import { CuisineService } from 'src/app/services/cuisine.service';
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
    private cuisineService: CuisineService
  ) { }

  ngOnInit(): void {
    this.cuisineService.getAllCuisine().subscribe(
      data => this.cuisines = data,
      err => console.log("This is error", err)
    );
  }

  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe(
      data => alert("Product added successfully!"),
      err => {
        alert("Can't able to add product");
        console.log(err)
      }
    );
  }

  onSubmit() {
    this.addProduct(this.product);
    // this.router.navigate([]);
    this.router.navigate(['product-list']);
  }
}
