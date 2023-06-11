import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cuisine } from 'src/app/model/cuisine';
import { Product } from 'src/app/model/product';
import { CuisineService } from 'src/app/services/cuisine.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  product: Product;
  id: number;
  cuisines:Cuisine[]=[];
  cuisineControl:FormControl;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cuisineService:CuisineService
  ) { }

  ngOnInit(): void {
    this.product = new Product();
    this.id = this.activatedRoute.snapshot.params['pid'];

    this.productService.getById(this.id).subscribe(
      data => this.product = data,
      err => console.log("This is error ",err)
    );

    this.cuisineControl = new FormControl('');

    this.cuisineService.getAllCuisine().subscribe(
      data => this.cuisines = data,
      err => console.log("This is error",err)
    );
  }

  updateProduct(pid: number, product: Product) {
    this.productService.updateProduct(pid, product).subscribe(
      data => alert("Product Updated Successfully!"),
      err => {
        alert("Can't able to update product!");
        console.log("This is error ", err);
      }
    );
  }

  onSubmit() {
    this.product.cuisine = this.cuisineControl.value;
    this.updateProduct(this.id,this.product);
  }

}
