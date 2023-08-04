import {Product} from "../product/product";

export class CartItem {
  id: number;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  // Scraping needed information from the Product object. This is nice because we do not need to grab it again from the
  // backend server and can reuse the information we already have which is more than enough
  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.unitPrice;
    this.quantity = 1;
  }
}
