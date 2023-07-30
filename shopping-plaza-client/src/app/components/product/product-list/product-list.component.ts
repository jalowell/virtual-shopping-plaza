import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  // Initializing an empty local products array
  products: Product[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;
  // Using constructor to inject the productService
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    this.listProducts();
  }

  private listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    // Check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      // now get the products for the given category id
      this.productService.getProductListByCategoryId(this.currentCategoryId).subscribe(
        data => {
          this.products = data;
        }
      )
    } else {
      // not category id available... default to category id 1
      this.productService.getProductsList().subscribe(
        data => {
          this.products = data;
        }
      )
    }
  }

  private handleSearchProducts() {
    const theKeyword: string | null = this.route.snapshot.paramMap.get('keyword');

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword!).subscribe(
      data => {
        this.products = data;
      });
  }
}
