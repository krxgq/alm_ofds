import express from 'express'
import { RestaurantController } from '../controllers/RestaurantController'
import { IRestaurant } from '../models/Restaurant'
import { IMenuItem } from '../models/MenuItem'

const router = express.Router()
const restaurantController = new RestaurantController()

// GET /restaurants - Retrieve a list of all restaurants.
router.get('/', (req, res) => {
  const restaurants = restaurantController.getRestaurants()
  res.json(restaurants)
})

// POST /restaurants - Add a new restaurant.
router.post('/', (req, res) => {
  const restaurant: IRestaurant = req.body
  const newRestaurant = restaurantController.addRestaurant(restaurant)
  res.json(newRestaurant)
})

// PUT /restaurants/:id/menu - Update the menu for a specific restaurant.
router.put('/:id/menu', (req, res) => {
  const restaurantId = Number(req.params.id)
  const menuItems: IMenuItem[] = req.body.menuItems
  const updatedRestaurant = restaurantController.updateMenu(
    restaurantId,
    menuItems
  )
  if (updatedRestaurant) {
    res.json(updatedRestaurant)
  } else {
    res.status(404).json({ error: 'Restaurant not found' })
  }
})

export { router as RestaurantRoutes }
