import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "http://localhost:1500/api/v1/product";
  filteredProduct:Product[];

  constructor(
    private http: HttpClient
  ) { 
    
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<any>(this.baseUrl, product);
  }

  getById(pid:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${pid}`);
  }

  updateProduct(pid:number,product:Product):Observable<any>{
    return this.http.put(`${this.baseUrl}/${pid}`,product);
  }

  deleteProduct(pid:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${pid}`);
  }

  setFilteredProduct(product:Product[]):void{
    this.filteredProduct = product;
  }

  getFilteredProduct():Product[]{
    return this.filteredProduct;
  }
}

