import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  product: Product;
  id: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product = new Product();
    this.id = this.activatedRoute.snapshot.params['pid'];

    this.productService.getById(this.id).subscribe(
      data => this.product = data,
      err => console.log("This is error ",err)
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
    this.updateProduct(this.id,this.product);
  }

}
