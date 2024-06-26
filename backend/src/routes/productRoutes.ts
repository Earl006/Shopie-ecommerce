import express from 'express';
import multer from 'multer';
import { productController } from '../controllers/productController';
import { authMiddleware, adminMiddleware} from '../middleware/authMiddleware';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', authMiddleware, adminMiddleware, upload.single('image'), productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', authMiddleware, adminMiddleware, upload.single('image'), productController.updateProduct);
router.delete('/:id', authMiddleware, adminMiddleware, productController.deleteProduct);

export default router;