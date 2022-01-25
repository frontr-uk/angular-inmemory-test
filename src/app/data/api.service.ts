import { Customer } from '../models/customer.interface';
import { forkJoin, Observable } from 'rxjs';
import { GetData } from '../models/get-data.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Order } from '../models/orders.inteface';
import { Product } from '../data/product';


@Injectable({ providedIn: 'root' })
export class ApiService {
  products$ = this.http.get<Product[]>('api/products');
  customers$ = this.http.get<Customer[]>('api/customers');
  orders$ = this.http.get<Order[]>('api/orders');

  constructor(private http: HttpClient) {}

  getData(): Observable<GetData> {
    return forkJoin([this.customers$,this.orders$,this.products$])
    .pipe(
      map(([customer, order, product]:[Customer[], Order[], Product[]]): GetData => {
        return {
          customer: new Map<number, string>(customer.map((key: Customer) => [key.id, key.name])),
          order,
          product: new Map<number, Product>(product.map((key: Product) => [key.id, key]))
        }
      })
    )
  }
}
