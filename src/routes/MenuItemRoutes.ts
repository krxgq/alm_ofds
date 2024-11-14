import express from 'express';
import { MenuItemController } from '../controllers/MenuItemController';
import { IMenuItem } from '../models/MenuItem';

const router = express.Router();
const menuItemController = new MenuItemController();

router.post('/addMenuItem', (req, res) => {
  const menuItem: IMenuItem = req.body;
  const addedMenuItem = menuItemController.addMenuItem(menuItem);
  res.json(addedMenuItem);
});

router.get('/getMenuItems', (req, res) => {
  const menuItems = menuItemController.getMenuItems();
  res.json(menuItems);
});

export { router as MenuItemRoutes };