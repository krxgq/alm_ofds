import express from 'express';
import { SupportController } from '../controllers/SupportController';
import { ISupportRequest } from '../services/SupportService';

const router = express.Router();
const supportController = new SupportController();

// POST /support - Submit a support request.
router.post('/', (req, res) => {
  const request: ISupportRequest = req.body;
  const newRequest = supportController.submitSupportRequest(request);
  res.json(newRequest);
});

export { router as SupportRoutes };