import {Product} from "../product";

export class ProductCategory {

  // Because of the "public" modifier these parameters will automgically be initialized within this class
  constructor(public id: number, public categoryName: string, public products: Product[]) { }
}
