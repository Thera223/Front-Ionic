import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recu } from '../Interface/recu';

@Injectable({
  providedIn: 'root',
})
export class RecuService {
  private apiUrl = 'http://localhost:8080/client/recus'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer un reçu par son ID
  getRecuById(id: number): Observable<Recu> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Recu>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa('samake:samake')}`, // Ajoutez les credentials si nécessaire
      }),
    });
  }

  // // Méthode pour récupérer tous les reçus
  // getRecus(): Observable<Recu[]> {
  //   const headers = this.getAuthHeaders();
  //   return this.http.get<Recu[]>(`${this.baseUrl}`, {
  //     headers,
  //     responseType: 'json',
  //   });
  // }

  // getReceiptUrl(paymentId: number): Observable<string> {
  //   const headers = this.getAuthHeaders();
  //   const url = `${this.baseUrl}/${paymentId}/pdf`;
  //   return this.http.get(url, {
  //     headers,
  //     responseType: 'text',
  //   });
  // }

}
