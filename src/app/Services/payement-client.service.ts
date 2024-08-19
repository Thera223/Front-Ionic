import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { payementclient } from '../Interface/PayementClient';

@Injectable({
  providedIn: 'root'
})
export class PayementClientService {

  private BaseUrl= "http://localhost:8080/client/paiements/client"

  constructor(private http:HttpClient) { }

  RecupererPayement(clientId: number):Observable<payementclient[]>{
    const url = `${this.BaseUrl}/${clientId}`;
      return this.http.get<payementclient []>(url);
  }

}
