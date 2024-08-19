import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pipe, tap} from "rxjs";
import {Produit} from "../Interface/Produit";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DetailserviceService {

  private baseUrl = 'http://localhost:8080/client/listesProduit'
  private detailurl = 'http://localhost:8080/client/{{id}}'
  private apiUrl = 'http://localhost:8080/'

  constructor(private http: HttpClient) {
  }

  Detailproduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl)
  }

  afficherdetailproduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(`http://localhost:8080/client/${id}`
    ).pipe(
      tap((data: Produit) => {
        console.log('Données du produit:', data); // Affiche les données du produit dans la console
        console.log('Images du produit:', data.images); // Vérifie que la propriété images est bien présente;
      })
    )

  }
}
