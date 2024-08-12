import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanierserviceService {
  private baseUrl = 'http://localhost:8080/client';
  private username = 'sam';
  private password = 'sam';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const credentials = btoa(`${this.username}:${this.password}`);
    return new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    });
  }

  ajouterProduit(
    clientId: number,
    produitId: number,
    qte: number
  ): Observable<HttpResponse<any>> {
    const headers = this.getAuthHeaders();
    return this.http.post<HttpResponse<any>>(
      `${this.baseUrl}/${clientId}/panier/ajouterProduit?produitId=${produitId}&quantite=${qte}`,
      {
        headers,
        responseType: 'text' as 'json',
      }
    );
  }

  listProduitsPanier(panierId: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/${panierId}/produits`);
  }
}
