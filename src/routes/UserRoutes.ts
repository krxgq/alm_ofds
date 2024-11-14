import express from 'express';
import { UserController } from '../controllers/UserController';
import { IUser } from '../models/User';

const router = express.Router();
const userController = new UserController();

// POST /users - Create a new user.
router.post('/', (req, res) => {
  const user: IUser = req.body;
  const newUser = userController.createUser(user);
  res.json(newUser);
});

// POST /users/:userId/orders/:orderId/rate - Rate an order by a specific user.
router.post('/:userId/orders/:orderId/rate', (req, res) => {
  const userId = Number(req.params.userId);
  const orderId = Number(req.params.orderId);
  const { rating } = req.body;
  const success = userController.rateOrder(userId, orderId, rating);
  if (success) {
    res.json({ message: 'Order rated successfully' });
  } else {
    res.status(400).json({ error: 'Failed to rate order' });
  }
});

export { router as UserRoutes };