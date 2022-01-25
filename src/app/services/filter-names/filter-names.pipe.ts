import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/models/orders.inteface';


@Pipe({
    name: 'filterNamesPipe',
    pure: false
})

export class FilterNamesPipe implements PipeTransform {
    transform(orders: Order[], customerId: string): Order[] {
      if(!customerId) return orders;
      return orders.filter((order:Order): boolean => order.customerId === parseInt(customerId));
    }
}