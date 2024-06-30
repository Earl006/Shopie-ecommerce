import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
    categoryForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.categoryForm = this.fb.group({
            categoryName: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.categoryForm.valid) {
            console.log(this.categoryForm.value);
            // Handle form submission logic here
        } else {
            console.error('Form is invalid');
        }
    }

    closeForm(): void {
        this.router.navigate(['/admin']);
    }
}
