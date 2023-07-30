import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../product";
import {ProductCategory} from "./product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private baseUrl = 'http://localhost:8080/api/shop/product-category';

  // Automatically injecting the HttpClient within this class to use. Using it to reach out to Springboot endpoint
  constructor(private httpClient: HttpClient) { }

  getProductCategoryList(): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(this.baseUrl);
  }

  getCategoryById(categoryId: number): Observable<ProductCategory[]> {
    const searchUrl = this.baseUrl + categoryId;
    return this.httpClient.get<ProductCategory[]>(searchUrl);
  }
}
