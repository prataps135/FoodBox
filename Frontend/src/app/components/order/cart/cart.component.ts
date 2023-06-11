import { Component,Input,OnInit,AfterContentInit,ViewChild, ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,AfterContentInit{
  // @Input() product:Product[];

  // @ViewChild('container',{read: ViewContainerRef}) container:any;

  cartProducts:Product[];
  grandTotal:number;
  // confirmButton:boolean;
  
  constructor(
    private cartService:CartService,
    private router:Router
    // private resolver:ComponentFactoryResolver
  ){}
  ngAfterContentInit(): void {
    // this.container.createComponent(this.resolver.resolveComponentFactory(ConfirmationComponent));
  }

  ngOnInit(): void {
      this.cartProducts  = this.cartService.getProduct();
  }

  onConfirm(){
    this.removeUnwantedProducts();
    this.cartService.setFinalProductList(this.cartProducts);
    this.router.navigate(['order-confirmation']);
  }

  removeUnwantedProducts() {
    for (let product of this.cartProducts) {
      if (product.counter === 0 || product.counter <= 0) {
        let index = this.cartProducts.indexOf(product);
         this.cartProducts = this.cartProducts.filter(
          (products) => products != product 
          );
      }
    }
  }
  ngOnDestroy(){
    console.log("Destroy called");
  }

  // confirmButtonFunction(){
  //   let active = false;
  //   for(let product of this.cartProducts){
  //     if(!(product.counter<0)){
  //       active = true;
  //     }
  //   }
  //   return false;
  // }
}
