import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from '../models/customer.interface';
import { Order } from '../models/orders.inteface';
import { createCustomerData } from './customer';
import { createOrderData } from './order';
import { createProductData, Product } from './product';

export class AppData implements InMemoryDbService {
  createDb(): { products: Product[]; orders: Order[]; customers: Customer[] } {
    return {
      customers: createCustomerData(),
      orders: createOrderData(),
      products: createProductData(),
    };
  }
}
