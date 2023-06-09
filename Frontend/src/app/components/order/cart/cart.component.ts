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
    // let total = 0;
    // for(let product of this.cartProducts){
    //   total = total + (product.counter * product.price);
    // }
    // this.grandTotal = total 
    // console.log("Grand total = ",this.grandTotal);

    this.router.navigate(['order-confirmation']);
  }

}
