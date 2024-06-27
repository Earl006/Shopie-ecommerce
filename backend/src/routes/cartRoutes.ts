// cartRoutes.ts
import express from 'express';
import { cartController } from '../controllers/cartController';

const router = express.Router();

router.post('/add', cartController.addToCart);
router.get('/:userId', cartController.getCart);
router.get('/all/:userId', cartController.getAllCartItems);
router.post('/remove', cartController.removeFromCart);
router.put('/update', cartController.updateCartItemQuantity);

export default router;