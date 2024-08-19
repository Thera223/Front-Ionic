import { Injectable } from '@angular/core';
import { Client } from '../Interface/client';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {


  private baseUrl = 'http://localhost:8080/creation/compteClient'; // Ajustez selon votre configuration
 

  constructor(private http: HttpClient) {}

  // private getAuthorizationHeader(): string {
  //   const credentials = btoa(`${this.username}:${this.password}`);
  //   return `Basic ${credentials}`;
  // }

 
  public creercompte(Client: Client): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(
      `${this.baseUrl}`,
      Client,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response',
        responseType: 'text' as 'json',
      }
    );
  }
}