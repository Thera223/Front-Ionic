import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { payementclient } from '../Interface/PayementClient';

@Injectable({
  providedIn: 'root',
})
export class PayementService {
  private baseUrl = 'http://localhost:8080/client';
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

  getCommandes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/commande`, {
      headers: this.getAuthHeaders(),
    });
  }

  getDetailsPaiement(commandeId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${commandeId}/total`, {
      headers: this.getAuthHeaders(),
    });
  }

  effectuerPaiement(commandeData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/effectuerPayement`, commandeData, {
      headers: this.getAuthHeaders(),
      responseType: 'text' as 'json',
    });
  }
  private BaseUrl1 = 'http://localhost:8080/client/paiements/client';

  RecupererPayement(clientId: number): Observable<payementclient[]> {
    const url = `${this.BaseUrl1}/${clientId}`;
    return this.http.get<payementclient[]>(url);
  }
}
