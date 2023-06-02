import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {

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
    this.addProduct(this.product)
  }
}
