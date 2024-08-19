import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayementService {
  private baseUrl = 'http://localhost:8080/client';

  private products = [
    { name: 'Produit 1', price: 104.99, date: '02.10.2023' },
    { name: 'Produit 2', price: 104.99, date: '02.10.2023' }
  ];

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.products;
  }
}
