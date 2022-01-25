import { Order } from 'src/app/models/orders.inteface';
import { FilterNamesPipe } from './filter-names.pipe';

describe('FilterNamesPipe', () => {
    const pipe = new FilterNamesPipe();
    const mockOrders: Order[] = [
        {
            id: 11079,
            customerId: 1,
            date: '123',
            productId: 1,
        },
        {
            id: 22222,
            customerId: 2,
            date: '123',
            productId: 1,
        }
    ]
    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
    it('should return nothing is ID is not defined.', () =>{
        const expected: Order[] = mockOrders;
        expect(pipe.transform(mockOrders, '')).toEqual(expected)
    })
    it('should return only order with customer specific Id', () =>{
        const expected: Order[] = [ {
            id: 11079,
            customerId: 1,
            date: '123',
            productId: 1,
        }]
        expect(pipe.transform(mockOrders, '1')).toEqual(expected)
    })
});
