import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router:Router
  ){}
  ngOnInit(): void {
      this.productService.getAllProduct().subscribe(
        data => this.product = data,
        err => console.log("This is error ",err)
      );
  }

  updateProduct(pid:number){
    this.router.navigate([`update-product/${pid}`]);
  }

  deleteProduct(pid:number){
    this.productService.deleteProduct(pid).subscribe(
      data => alert("Delete Successfully!!"),
      err => console.log("This is error",err)
    );
    this.router.navigate(['product-list']);
  }
}
