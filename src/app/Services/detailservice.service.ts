import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../Interface/Produit";

@Injectable({
  providedIn: 'root'
})
export class DetailserviceService {

  private baseUrl = 'http://localhost:8080/client'

  constructor(private http:HttpClient) { }

  Detailproduit():Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.baseUrl}/listesProduit`)
  }
}
