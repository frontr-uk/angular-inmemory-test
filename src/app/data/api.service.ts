import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../data/product';
import { Customer } from '../models/customer.interface';
import { GetData } from '../models/get-data.interface';
import { Order } from './order';

@Injectable({ providedIn: 'root' })
export class ApiService {
  products$ = this.http.get<Product[]>('api/products');
  customers$ = this.http.get<Customer[]>('api/customers');
  orders$ = this.http.get<Order[]>('api/orders');

  constructor(private http: HttpClient) {}

  getData(): Observable<GetData> {
    return forkJoin([this.customers$,this.orders$,this.products$])
    .pipe(
      map(([customer, order, product]:[Customer[], Order[], Product[]]) => {
        return {
          customer: new Map(customer.map(key => [key.id, key.name])),
          order,
          product: new Map(product.map(key => [key.id, key]))
        }
      })
    )
  }
}
