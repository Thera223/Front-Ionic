import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TotalCommandeResponse {
  totalCommande: number;
  coutLivraison: number;
}

@Injectable({
  providedIn: 'root',
})
export class RecuService {
  private apiUrl = 'http://localhost:8080/client/recus';
  private apiTotalCommandeUrl = 'http://localhost:8080/client';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const credentials = btoa('samake:samake');
    return new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    });
  }

  getRecuById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url, { headers: this.getAuthHeaders() });
  }

  getTotalCommande(commandeId: number): Observable<TotalCommandeResponse> {
    const url = `${this.apiTotalCommandeUrl}/${commandeId}/total`;
    return this.http.get<TotalCommandeResponse>(url, {
      headers: this.getAuthHeaders(),
    });
  }
}
