import { OrderService } from '../services/OrderService';
import { Order, IOrder } from '../models/Order';

class OrderController {
  constructor(private orderService: OrderService = new OrderService()) {}

  placeOrder(userId: number, items: number[]): IOrder {
    return this.orderService.createOrder(userId, items);
  }

  getOrderStatus(orderId: number): string {
    return this.orderService.getOrderStatus(orderId);
  }
}

export { OrderController };
