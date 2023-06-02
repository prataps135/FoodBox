import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  product:Product[];
  
  constructor(
    private productService : ProductService
  ){}

  ngOnInit(): void {
   this.productService.getAllProduct().subscribe(
    data=> this.product = data,
    err => console.log('This is error ',err)
   );   
  }
}
