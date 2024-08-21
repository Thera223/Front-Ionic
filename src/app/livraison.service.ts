import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivraisonService {
  private baseUrl = 'http://localhost:8080/client';
  private type = `${this.baseUrl}/TypeLivraison`;
  private livraison = `${this.baseUrl}/ajouterLivraison`;
  private commande = `${this.baseUrl}/commande`;
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

  getTypesLivraison(): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(this.type, { headers });
  }

  getCommandeEnAttente(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(this.commande, { headers });
  }

  getCommandesDisponibles(): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.baseUrl}/commande`, { headers });
  }

  ajouterLivraison(commandeId: number, livraisonData: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.livraison}/${commandeId}`, livraisonData, {
      responseType: 'text',
      headers,
    });
  }
}
