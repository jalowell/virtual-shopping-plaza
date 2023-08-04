import { Injectable } from '@angular/core';
import {CartItem} from "./cart-item";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {
    // check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem | undefined = undefined;

    if(this.cartItems.length > 0) {
      // find the item in the cart based on item id

      // this will use a lambda expression to look through the cartItems to see if the cart item already exists.
      // If it does exist, existingCartItem will be assigned that value. If it does not exist, existingCartItem will
      // Be assigned the value undefined
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

      // check if we found it
      alreadyExistsInCart = (existingCartItem != undefined);
    }

    if(alreadyExistsInCart) {
      if (existingCartItem instanceof CartItem) {
        existingCartItem.quantity++;
      }
    } else {
      // just add the item to the array
      this.cartItems.push(theCartItem);
    }

    // compute cart total price and total quantity
    this.computeTotal();

  }

  private computeTotal() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCardItem of this.cartItems) {
      totalPriceValue += currentCardItem.quantity * currentCardItem.unitPrice;
      totalQuantityValue += currentCardItem.quantity;
    }

    // publish the new values... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  private logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('Contents of the cart');
    for(let tempCartItems of this.cartItems) {
      const subTotalPrice = tempCartItems.quantity * tempCartItems.unitPrice;
      console.log(`name: ${tempCartItems.name}, quantity=${tempCartItems.quantity}, subTotalPrice=${subTotalPrice}`);
      console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    }
  }
}
