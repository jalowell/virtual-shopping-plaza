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
  previousCategoryId: number = 1;
  previousKeyword: string = "";
  searchMode: boolean = false;

  // New properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 25;
  theTotalElements: number = 0;

  // Using constructor to inject the productService
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    this.listProducts();
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    console.log("hasCategoryId: ", hasCategoryId);

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      if (this.previousCategoryId != this.currentCategoryId) {
        this.thePageNumber = 1;
      }

      this.previousCategoryId = this.currentCategoryId;
      // now get the products for the given category id
      this.productService.getProductListByCategoryIdPaginate(this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId)
        .subscribe(this.processResult());
    }
    else {
      // not category id available ... default to list all products
      this.productService.getProductsListPaginate(this.thePageNumber - 1,
        this.thePageSize).subscribe(this.processResult());
    }
  }


  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;
    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    // now search for the products using keyword
    this.productService.searchProductsPaginate(this.thePageNumber - 1,
      this.thePageSize,
      theKeyword).subscribe(this.processResult());
  }

  updatePageSize(value: string) {
    this.thePageSize = +value;
    this.thePageNumber = 1;
    this.listProducts();
  }

  processResult() {
    return (data:any) => {
      this.products = data.content;
      this.thePageNumber = data.number + 1;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
    }
  }
}
