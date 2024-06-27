// orderRoutes.ts
import express from 'express';
import { orderController } from '../controllers/orderController';
import { authMiddleware } from '../middleware/authMiddleware';
const router = express.Router();

router.post('/create', authMiddleware, orderController.createOrder);
router.get('/:userId', authMiddleware, orderController.getOrders);
router.put('/:orderId', orderController.markOrderAsCompleted);

export default router;