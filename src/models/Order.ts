import { IMenuItem } from './MenuItem';

interface IOrder {
  id: number;
  orderItems: IMenuItem[];
  totalAmount: number;
  deliveryStatus: string;
  paymentStatus: string;
}

class Order implements IOrder {
  constructor(
    public id: number,
    public orderItems: IMenuItem[],
    public totalAmount: number,
    public deliveryStatus: string,
    public paymentStatus: string
  ) {}
}

export { Order, IOrder };
