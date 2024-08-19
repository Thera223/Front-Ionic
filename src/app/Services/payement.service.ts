import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayementService {
  private products = [
    { name: 'Produit 1', price: 104.99, date: '02.10.2023' },
    { name: 'Produit 2', price: 104.99, date: '02.10.2023' }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }
}
