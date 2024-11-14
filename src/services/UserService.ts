import { IUser } from '../models/User';

class UserService {
  private users: IUser[] = [];

  createUser(user: IUser): IUser {
    this.users.push(user);
    return user;
  }

  rateOrder(userId: number, orderId: number, rating: number): boolean {
    // Implement logic to rate an order
    return true;
  }
}

export { UserService };