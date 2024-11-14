import { Order, IOrder } from '../models/Order';
import { MenuItem, IMenuItem } from '../models/MenuItem';

class OrderService {
  private orders: IOrder[] = [];

  createOrder(userId: number, itemIds: number[]): IOrder {
    const items: IMenuItem[] = this.fetchMenuItems(itemIds);
    const totalAmount = items.reduce((sum, item) => sum + item.price, 0);

    const newOrder = new Order(this.orders.length + 1, items, totalAmount, 'Pending', 'Unpaid');
    this.orders.push(newOrder);
    return newOrder;
  }

  getOrderStatus(orderId: number): string {
    const order = this.orders.find(o => o.id === orderId);
    return order ? order.deliveryStatus : 'Order not found';
  }

  private fetchMenuItems(itemIds: number[]): IMenuItem[] {
    // Placeholder logic to fetch menu items by ids
    // In a real application, this would query a database or another service
    return itemIds.map(id => new MenuItem(id, `Item ${id}`, `Description for item ${id}`, 10.0, true, 'Category'));
  }
}

export { OrderService };
