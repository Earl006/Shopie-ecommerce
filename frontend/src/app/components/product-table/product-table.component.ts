import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/interface';
import { CurrencyPipe } from "../../pipes/currency.pipe";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-table',
    standalone: true,
    imports: [CurrencyPipe, CommonModule],
    templateUrl: './product-table.component.html',
    styleUrl: './product-table.component.css'
})
export class ProductTableComponent implements OnInit {
  
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  updateProduct(product: Product): void {
    // Implement update functionality here
    console.log('Update product:', product);
  }

  deleteProduct(productId: string): void {
    // Implement delete functionality here
    console.log('Delete product with id:', productId);
  }
}
