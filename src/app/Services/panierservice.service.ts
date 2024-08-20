import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PanierClient {
  id: number; // ID du panier
  produit: {
    id: number;
    libelle: string;
    prix: number;
  };
  quantite: number;
}

@Injectable({
  providedIn: 'root',
})
export class PanierserviceService {
  private baseUrl = 'http://localhost:8080/client';
  private username = 'momo';
  private password = '123';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const credentials = btoa(`${this.username}:${this.password}`);
    return new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    });
  }

  getPanier(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/1/produits`, {
      headers: this.getAuthHeaders(),
    });
  }

  passerCommande(produitsCommandes: any[], panierId: number): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/passerCommandeViaPanier/${panierId}`,
      produitsCommandes,
      {
        headers: this.getAuthHeaders(),
        responseType: 'text' as 'json', // Si la réponse est du texte
      }
    );
  }

  supprimerProduitDuPanier(
    clientId: number,
    panierId: number,
    produitId: number
  ): Observable<any> {
    const url = `${this.baseUrl}/${clientId}/panier/${panierId}/supprimerProduit?produitId=${produitId}`;
    return this.http.delete<any>(url, {
      headers: this.getAuthHeaders(),
    });
  }

  updateQuantitePanier(
    clientId: number,
    panierId: number,
    produitCommandeeId: number,
    nouvelleQuantite: number
  ): Observable<any> {
    const url = `${this.baseUrl}/${clientId}/panier/${panierId}/modifierQuantite?produitId=${produitCommandeeId}&nouvelleQuantite=${nouvelleQuantite}`;
    return this.http.put<any>(
      url,
      {},
      {
        headers: this.getAuthHeaders(),
      }
    );
  }
}
