import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class ResetpasswordComponent {

  resetPasswordForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      // Simulate password reset logic here
      this.successMessage = 'Password reset successful!';
      
      // Display success message for 3 seconds before navigating
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000); 
    } else {
      this.errorMessage = 'Please correct the errors in the form.';
    }
  }
}
