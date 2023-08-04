import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {CartItem} from "../../cart/cart-item";
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {
    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProductById(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

  addToCart(product: Product) {
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem);
  }
}
