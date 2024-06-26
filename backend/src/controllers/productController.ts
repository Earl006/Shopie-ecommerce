import { Request, Response } from 'express';
import { productService } from '../services/productService';

export class ProductController {
  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await productService.createProduct(req.body, req.file as Express.Multer.File);
      res.status(201).json({message: 'Product created', product});
    } catch (error) {
      console.error('Create product error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await productService.getAllProducts();
      res.json({message: 'Products found', products});
    } catch (error) {
      console.error('Get products error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await productService.getProductById(id);
      if (product) {
        res.json({message: 'Product found', product});
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      console.error('Get product error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await productService.updateProduct(id, req.body, req.file);
      res.json({message: 'Product updated', product});
    } catch (error) {
      console.error('Update product error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await productService.deleteProduct(id);
      res.status(204).json({message: 'Product deleted'});
    } catch (error) {
      console.error('Delete product error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export const productController = new ProductController();