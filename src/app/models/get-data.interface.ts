import { Order } from "../data/order";
import { Product } from "../data/product";

export interface GetData {
    customer: Map<number, string>;
    order: Order[];
    product: Map<number, Product>;
  }