import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/api/product/create';
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMmU2OWI0NS0zZGM5LTQ2YmItYWUxNy0wMDlkMGY0YzJhMDIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTk0NzYyMzUsImV4cCI6MTcxOTU2MjYzNX0.uPwPdk0cDRiDCUO0u66weuLFgD-oMoxx3clVyV99kWA';

  constructor(private http: HttpClient) { }

  createProduct(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authToken}`
    });

    return this.http.post<any>(this.apiUrl, formData, { headers });
  }
}
