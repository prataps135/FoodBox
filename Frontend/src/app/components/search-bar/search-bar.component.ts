import { Component,Input,OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  @Input() products:Product[];
  // @Output() searchedProducts:Product[];
  searchedProducts:Product[];

  constructor(
    private productService:ProductService
  ){}
  
  ngOnInit(): void {
    this.searchedProducts=[];
    this.searchedProducts = this.products;
    console.log("Search OnInit")
  }

  search(key:string){
    if(!key){
      this.searchedProducts = this.products;
    }
    this.searchedProducts = this.products.filter(
      product => product.name.toLowerCase().includes(key.toLowerCase())
    );

    this.productService.setFilteredProduct(this.searchedProducts);
    // console.log(this.searchedProducts);
  }
  
  
}
