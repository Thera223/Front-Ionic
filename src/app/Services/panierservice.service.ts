import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PanierClient{
  id: number;
  quantite: number;
  panierId: number
  clientId: number
  nouvelleQuantité: number
  produitId: number
   produit:{
    fileInfo:any[];
    libelle: string;
    prix: number;
    total: Number;
   }
 
}

@Injectable({
  providedIn: 'root',
})
export class PanierserviceService {
  constructor(private http: HttpClient) {}
  
  //Fonction pour recupérer un prduit pour afficher et d'afficher sur la page panier

  apiurl= 'http://localhost:8080/client/3/produits';

  // apiurlSup= 'http://localhost:8080/client/3/panier/';

  // urlUpdate= 'http://localhost:8080/client/2/panier/'

  getPaner():Observable<PanierClient[]>{
    return this.http.get<PanierClient[]>(this.apiurl);
    
  }
  supprimerPanier(clientId: number, panierId: number): Observable<string> {
    const url = `http://localhost:8080/client/${clientId}/panier/${panierId}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  updatePanier(panier_id: number, produit_id: number, nouvelleQuantité: number):void{
    this.http.put(`http://localhost:8080/client/2/panier/${panier_id}/modifierQuantite?produitId=${produit_id}&nouvelleQuantite=${nouvelleQuantité}`, {}).subscribe(()=>{
      console.log('Produit modifier');
      
    }
  , error=>{
    console.log('erreur de modification', error);
    
  })
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
