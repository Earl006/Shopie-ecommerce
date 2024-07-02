import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/interface';
import { CurrencyPipe } from "../../pipes/currency.pipe";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-table',
  standalone: true,
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  imports: [CurrencyPipe, CommonModule, RouterLink]
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        if (data && data.products && Array.isArray(data.products)) {
          this.products = data.products.map((product: any) => ({
            ...product,
            // No need to convert categoryId to number since it's a UUID string
          }));
        } else {
          console.error('Invalid response format:', data);
        }
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }
  

  updateProduct(product: Product): void {
    // Handle product update logic
  }

  deleteProduct(productId: string): void {
    // Handle product delete logic
  }
}