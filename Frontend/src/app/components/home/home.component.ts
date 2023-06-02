import { Component,OnInit,OnChanges } from '@angular/core';
import { Product } from 'src/app/model/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnChanges{
  product:Product[];
  auth:string;
  
  constructor(
    private productService : ProductService,
    private authService: AuthenticationService
  ){}

  ngOnInit(): void {
   this.productService.getAllProduct().subscribe(
    data=> this.product = data,
    err => console.log('This is error ',err)
   );   
   this.auth = this.authService.getAuth();
  }

  ngOnChanges(){
    
  }

}
