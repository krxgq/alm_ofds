import { RestaurantService } from '../services/RestaurantService';
import { IRestaurant } from '../models/Restaurant';
import { IMenuItem } from '../models/MenuItem';

class RestaurantController {
  constructor(
    private restaurantService: RestaurantService = new RestaurantService()
  ) {}

  getRestaurants(): IRestaurant[] {
    return this.restaurantService.getAllRestaurants();
  }

  addRestaurant(restaurant: IRestaurant): IRestaurant {
    return this.restaurantService.addRestaurant(restaurant);
  }

  updateMenu(restaurantId: number, menuItems: IMenuItem[]): IRestaurant | null {
    return this.restaurantService.updateMenu(restaurantId, menuItems);
  }
}

export { RestaurantController };