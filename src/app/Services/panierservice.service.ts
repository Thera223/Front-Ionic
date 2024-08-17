import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PanierClient{
  id: number;
  libelle: string;
  prix: number;
  total: Number;
   fileInfo:string[2];
 
}

@Injectable({
  providedIn: 'root',
})
export class PanierserviceService {
  constructor(private http: HttpClient) {}
  
  //Fonction pour recupérer un prduit pour afficher et d'afficher sur la page panier

  apiurl= 'http://localhost:8080/client/1/produits';
  apiurlSup= 'http://localhost:8080/client/2/panier/2/supprimerProduit';

  getPaner():Observable<PanierClient[]>{
    return this.http.get<PanierClient[]>(this.apiurl);
  }
  supprimerPanier():Observable<any>{
    return this.http.delete(this.apiurlSup +'Supprimer');
  }

  private baseUrl = 'http://localhost:8080/client';
  private username = 'sam';
  private password = 'sam';


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
