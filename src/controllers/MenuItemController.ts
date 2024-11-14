import { MenuItemService } from '../services/MenuItemService'
import { IMenuItem } from '../models/MenuItem'

class MenuItemController {
  constructor(
    private menuItemService: MenuItemService = new MenuItemService()
  ) {}

  addMenuItem(menuItem: IMenuItem): IMenuItem {
    return this.menuItemService.addMenuItem(menuItem)
  }

  getMenuItems(): IMenuItem[] {
    return this.menuItemService.getMenuItems()
  }
}

export { MenuItemController }
