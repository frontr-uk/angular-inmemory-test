import { Customer } from "../models/customer.interface";

export function createCustomerData(): Customer[] {
  return [
    { id: 1, name: 'Maria Anders' },
    { id: 2, name: 'Ana Trujillo' },
    { id: 3, name: 'Thomas Hardy' },
  ];
}
