import { MenuItem, IMenuItem } from '../models/MenuItem';

class MenuItemService {
  private menuItems: IMenuItem[] = [];

  addMenuItem(menuItem: IMenuItem): IMenuItem {
    this.menuItems.push(menuItem);
    return menuItem;
  }

  getMenuItems(): IMenuItem[] {
    return this.menuItems;
  }
}

export { MenuItemService };