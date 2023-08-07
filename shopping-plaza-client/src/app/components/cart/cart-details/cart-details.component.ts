import {Component, OnInit} from '@angular/core';
import {CartItem} from "../cart-item";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.less']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    // Get a handle to the cart items
    this.cartItems=this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
        data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
        data => this.totalQuantity = data
    );

    // compute cart total price and total quantity
    this.cartService.computeTotal();

  }

  incrementCartItem(tempCartItem: CartItem) {
    this.cartService.addToCart(tempCartItem);
  }

  decrementCartItem(tempCartItem: CartItem) {
    this.cartService.decrementCartItem(tempCartItem);
  }

    removeItem(tempCartItem: CartItem) {
        this.cartService.remove(tempCartItem);
    }
}
