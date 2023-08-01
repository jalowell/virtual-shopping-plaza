import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "./product";
import {ProductListComponent} from "./product-list/product-list.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/shop/products';

  constructor(private httpClient: HttpClient) { }

  getProductsList(): Observable<Product[]> {
    return this.getProducts(this.baseUrl);
  }

  getProductsListPaginate(thePage: number, thePageSize: number): Observable<Product[]> {
    return this.getProducts(this.baseUrl+`?page=${thePage}&size=${thePageSize}`);
  }

  getProductListByCategoryId(theCategoryId: number): Observable<ProductPage> {
    // Need to build URL based on category id
    const searchUrl= `${this.baseUrl}/category/${theCategoryId}`
    return this.httpClient.get<ProductPage>(searchUrl);
  }

  getProductListByCategoryIdPaginate(thePage: number, thePageSize: number, theCategoryId: number): Observable<ProductPage> {
    // Need to build URL based on category id
    const searchUrl= `${this.baseUrl}/category/${theCategoryId}?page=${thePage}&size=${thePageSize}`
    return this.httpClient.get<ProductPage>(searchUrl);
  }

  searchProducts(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/${keyword}`;
    return this.getProducts(searchUrl);
  }

  private getProducts(searchUrl: string) {
    console.log(this.httpClient.get<Product[]>(searchUrl));
    return this.httpClient.get<Product[]>(searchUrl);
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/id/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
  }


}

interface ProductPage {
  content: Product[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
