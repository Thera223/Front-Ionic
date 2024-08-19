import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { commande } from '../Interface/commande';


@Injectable({
  providedIn: 'root'
  
})
export class CommandeService {

  private BaseUrl= "http://localhost:8080/client/commandes"

  constructor(private http:HttpClient) { }

RecupererCommande(clientId: number):Observable<commande[]>{
  const url = `${this.BaseUrl}/${clientId}`;
    return this.http.get<commande[]>(url);
}
}