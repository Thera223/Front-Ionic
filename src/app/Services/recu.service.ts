import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recu } from '../Interface/recu';

@Injectable({
  providedIn: 'root'
})
export class RecuService {

  private baseUrl = 'http://localhost:8080/client/recus';
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

  // Méthode pour récupérer tous les reçus
  getRecus(): Observable<Recu[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Recu[]>(`${this.baseUrl}`, {
      headers,
      responseType: 'json',
    });
  }


  
  
}


