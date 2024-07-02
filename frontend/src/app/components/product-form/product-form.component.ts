import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      shortDescription: ['', Validators.required],
      price:['',Validators.required],
      categoryId:['',Validators.required],
      stockQuantity:['',Validators.required],
      productImage: [null, Validators.required],
    });
  }

  // onFileChange(event: any): void {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.productForm.patchValue({
  //       productImage: file
  //     });
  //   }
  // }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = new FormData();
      formData.append('name', this.productForm.get('name')!.value);
      formData.append('shortDescription', this.productForm.get('shortDescription')!.value);
      formData.append('price', this.productForm.get('price')!.value);
      formData.append('categoryId', this.productForm.get('categoryId')!.value);
      formData.append('stockQuantity', this.productForm.get('stockQuantity')!.value);
      formData.append('image', this.productForm.get('productImage')!.value);
      // You can add other form fields here as needed

      this.productService.createProduct(formData).subscribe(
        response => {
          console.log('Product created successfully', response);
          this.router.navigate(['/product']);
        },
        error => {
          console.error('Error creating product', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  closeForm(): void {
    this.router.navigate(['/product']);
  }
}
