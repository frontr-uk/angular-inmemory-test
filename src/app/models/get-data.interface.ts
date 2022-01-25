
import { Product } from "../data/product";
import { Order } from "./orders.inteface";

export interface GetData {
    customer: Map<number, string>;
    order: Order[];
    product: Map<number, Product>;
  }