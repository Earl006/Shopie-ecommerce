import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/product';

  constructor(private http: HttpClient) {}

  createProduct(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZjRjOGU0OS0wMWMxLTQ1MTgtODc4Ny0wNTEzYzI1MWIwMjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTk4NDM0MTksImV4cCI6MTcxOTkyOTgxOX0.HGOSuFTycTGzqh86ZggcwzIoLCYFdqbTlCUi2MP2zgY'
    });

    return this.http.post<any>(`${this.apiUrl}/create`, formData, { headers });
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/all`);
  }
}
