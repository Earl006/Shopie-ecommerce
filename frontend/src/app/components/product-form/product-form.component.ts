import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
    productForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.productForm = this.fb.group({
            productImage: [null, Validators.required],
            productName: ['', Validators.required],
            productDescription: ['', Validators.required],
            categoryName: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.productForm.valid) {
            console.log(this.productForm.value);
            // Handle form submission logic here
        } else {
            console.error('Form is invalid');
        }
    }

    closeForm(): void {
        this.router.navigate(['/admin']);
    }
}
