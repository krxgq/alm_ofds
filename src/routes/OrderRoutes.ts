import express from 'express';
import { OrderController } from '../controllers/OrderController';

const router = express.Router();
const orderController = new OrderController();

router.post('/placeOrder', (req, res) => {
  const { userId, items } = req.body;
  const order = orderController.placeOrder(userId, items);
  res.json(order);
});

router.get('/trackOrder/:orderId', (req, res) => {
  const { orderId } = req.params;
  const status = orderController.getOrderStatus(Number(orderId));
  res.json({ status });
});

export { router as OrderRoutes };
