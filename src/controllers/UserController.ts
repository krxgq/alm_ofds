import { UserService } from '../services/UserService'
import { IUser } from '../models/User'

class UserController {
  constructor(private userService: UserService = new UserService()) {}

  createUser(user: IUser): IUser {
    return this.userService.createUser(user)
  }

  rateOrder(userId: number, orderId: number, rating: number): boolean {
    return this.userService.rateOrder(userId, orderId, rating)
  }
}

export { UserController }
