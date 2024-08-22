import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../Interface/Produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  // private baseUrl = 'http://localhost:8080';
  // private produitUrl = `http://localhost:8080/admin/listesProduit`;
  // // private produitByidUrl = `http://localhost:8080/admin/lireProduitByproduit`;
  // private username = 'samake';
  // private password = 'samake';

  // constructor(private http: HttpClient) {}

  // private getAuthHeaders(): HttpHeaders {
  //   const credentials = btoa(`${this.username}:${this.password}`);
  //   return new HttpHeaders({
  //     Authorization: `Basic ${credentials}`,
  //     'Content-Type': 'application/json',
  //   });
  // }

  // getProduits(): Observable<any> {
  //   const headers = this.getAuthHeaders();
  //   return this.http.get<any>(`${this.produitUrl}`, {
  //     headers,
  //   });
  // }

  // // getProduitByproduitUrl(produitId: number): Observable<any> {
  // //   const headers = this.getAuthHeaders();
  // //   return this.http.get<any>(`${this.produitByIdUrl}/${produitId}`, {
  // //     headers,
  // //     responseType: 'text' as 'json',
  // //   });
  // // }

  // listFiles(): Observable<any> {
  //   return this.http.get<any[]>(`${this.baseUrl}/files`);
  // }

  private baseUrl = 'http://localhost:8080';
  private produitUrl = `http://localhost:8080/admin/listesProduit`;
  private produitByIdUrl = `http://localhost:8080/admin/produit`;
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

  getProduits(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.produitUrl}`, {
      headers,
    });
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.produitByIdUrl}/${id}`);
  }

  listFiles(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/files`);
  }


  // pour ajouter le produit au panier 
   private baseUrls = 'http://localhost:8080/client'
   
addPanier(clientId: number, produitId: number, quantite: number):Promise<void>{
  const url= `${this.baseUrls}/${clientId}/panier/ajouterProduit?produitId=${produitId}&quantite=${quantite}`;
  return this.http.post<void>(url, {}).toPromise();
}

}

