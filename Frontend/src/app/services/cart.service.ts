import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product:Product[]=[];

  constructor() { }

  getProduct(){
    return this.product;
  }

  setProduct(product:Product){
    this.product.push(product);
    alert("Product added to cart!!");
  }
}
