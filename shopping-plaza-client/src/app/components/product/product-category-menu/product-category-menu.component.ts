import {Component, OnInit} from '@angular/core';
import {ProductCategoryService} from "./product-category.service";
import {ProductCategory} from "./product-category";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.less']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[] = [];
  currentCategoryId: number = 1;

  constructor(private productCategoryService: ProductCategoryService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProductCategories();
      });
    this.listProductCategories();
  }

  private listProductCategories() {
    const hasProductCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasProductCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      // now get the products for the given category id
      this.productCategoryService.getCategoryById(this.currentCategoryId).subscribe(
        data => {
          this.productCategories = data;
        }
      )
    } else {
      this.productCategoryService.getProductCategoryList().subscribe(categories => {
          this.productCategories = categories.content;
        }
      );
    }
  }
}
