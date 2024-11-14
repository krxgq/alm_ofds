import { IMenuItem } from './MenuItem'

interface IRestaurant {
  id: number
  name: string
  address: string
  menuItems: IMenuItem[]
}

class Restaurant implements IRestaurant {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public menuItems: IMenuItem[]
  ) {}
}

export { Restaurant, IRestaurant }
