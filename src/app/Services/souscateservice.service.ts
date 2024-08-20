import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Produit } from '../Interface/Produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SouscateserviceService {
  private baseUrl = 'http://localhost:8080';
  private souscategorieUrl = `http://localhost:8080/admin/sous-categorie`;
  private produitBySousCategorieUrl = `http://localhost:8080/admin/lireProduitBySousCategorie`;
  private username = 'samake';
  private password = 'samake';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const credentials = btoa(`${this.username}:${this.password}`);
    return new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    });
  }

  getSousCategories(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.souscategorieUrl}`, {
      headers,
      //responseType: 'text' as 'json',
    });
  }
  getProduitBySousCategorieUrl(sousCategorieId: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(
      `${this.produitBySousCategorieUrl}/${sousCategorieId}`,
      {
        headers,
        responseType: 'text' as 'json',
      }
    );
  }

  listFiles(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/files`);
  }
}
