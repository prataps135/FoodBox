import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  product:Product[];
  constructor(
    private productService:ProductService,
  ){}
  ngOnInit(): void {
      this.productService.getAllProduct().subscribe(
        data => this.product = data,
        err => console.log("This is error ",err)
      );
  }
}