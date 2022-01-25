import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../data/order';

@Pipe({
    name: 'filterNamesPipe',
    pure: false
})

export class FilterNamesPipe implements PipeTransform {
    transform(orders: Order[], customerId: string): Order[] {
      if(!customerId) return orders;
      return orders.filter((order:Order) => order.customerId == parseInt(customerId));
    }
}