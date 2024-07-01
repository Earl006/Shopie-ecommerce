import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      productImage: [null, Validators.required],
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      categoryName: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = new FormData();
      formData.append('image', this.productForm.get('productImage')!.value as File);
      formData.append('name', this.productForm.get('productName')!.value as string);
      formData.append('shortDescription', this.productForm.get('productDescription')!.value as string);
      formData.append('categoryId', this.productForm.get('categoryName')!.value as string);

      formData.append('stockQuantity', '100'); // Example value, adjust as needed

      this.productService.createProduct(formData).subscribe(
        (response) => {
          console.log('Product created successfully:', response);
          // Redirect or show success message
          this.router.navigate(['/admin']);
        },
        (error) => {
          console.error('Error creating product:', error);
          // Handle error message display
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  closeForm(): void {
    this.router.navigate(['/admin']);
  }
}
