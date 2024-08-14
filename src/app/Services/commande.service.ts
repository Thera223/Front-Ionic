import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { commande } from '../Interface/commande';


@Injectable({
  providedIn: 'root'
  
})
export class CommandeService {

  private BaseUrl= "http://localhost:8082/admin/voirCommandes"

  constructor(private http:HttpClient) { }

RecupererCommande():Observable<commande[]>{
  return this.http.get <commande []>(this.BaseUrl)
}
}