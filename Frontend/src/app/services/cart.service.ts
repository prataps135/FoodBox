import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: Product[] = [];

  constructor() { }

  getProduct() {
    return this.productList;
  }

  setProduct(product: Product) {
    let isAdded: boolean = false;
    for (let pro of this.productList) {
      if (product.name === pro.name) {
        console.log("element found");
        product.counter += 1;
        console.log(product.counter);
        isAdded = true;
      }
    }
    if (isAdded === false) {
      this.productList.push(product);
    }
  }
}
