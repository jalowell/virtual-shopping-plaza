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

  getProductsListPaginate(thePage: number, thePageSize: number): Observable<Product[]> {
    return this.getProductsHelperMethod<Product[]>(this.baseUrl+`?page=${thePage}&size=${thePageSize}`);
  }

  getProductListByCategoryIdPaginate(thePage: number, thePageSize: number, theCategoryId: number): Observable<ProductPage> {
    const searchUrl= `${this.baseUrl}/category/${theCategoryId}?page=${thePage}&size=${thePageSize}`
    return this.getProductsHelperMethod<ProductPage>(searchUrl);
  }

  searchProductsPaginate(thePage: number, thePageSize: number, theKeyword: string): Observable<ProductPage> {
    const searchUrl= `${this.baseUrl}/search/${theKeyword}?page=${thePage}&size=${thePageSize}`
    return this.getProductsHelperMethod<ProductPage>(searchUrl);
  }

  getProductById(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/id/${theProductId}`;
    return this.getProductsHelperMethod<Product>(productUrl);
  }

  private getProductsHelperMethod<T>(searchUrl: string): Observable<T> {
    return this.httpClient.get<T>(searchUrl);
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


// BEFORE PAGINATION
// getProductsList(): Observable<Product[]> {
//   return this.getProducts(this.baseUrl);
// }

// BEFORE PAGINATION
// getProductListByCategoryId(theCategoryId: number): Observable<ProductPage> {
//   // Need to build URL based on category id
//   const searchUrl= `${this.baseUrl}/category/${theCategoryId}`
//   return this.httpClient.get<ProductPage>(searchUrl);
// }


// BEFORE PAGINATION
// searchProducts(keyword: string): Observable<Product[]> {
//   const searchUrl = `${this.baseUrl}/search/${keyword}`;
//   return this.getProducts(searchUrl);
// }
