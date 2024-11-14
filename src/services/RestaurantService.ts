import { IRestaurant } from '../models/Restaurant';
import { IMenuItem } from '../models/MenuItem';

class RestaurantService {
  private restaurants: IRestaurant[] = [];

  getAllRestaurants(): IRestaurant[] {
    return this.restaurants;
  }

  addRestaurant(restaurant: IRestaurant): IRestaurant {
    this.restaurants.push(restaurant);
    return restaurant;
  }

  updateMenu(restaurantId: number, menuItems: IMenuItem[]): IRestaurant | null {
    const restaurant = this.restaurants.find(r => r.id === restaurantId);
    if (restaurant) {
      restaurant.menuItems = menuItems;
      return restaurant;
    }
    return null;
  }
}

export { RestaurantService };