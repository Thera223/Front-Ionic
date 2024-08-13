import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Category {
  id: number;
  libelle: string;
}
export interface sousCategorie {
  id: number;
  libelle: string;
  category: Category;
}

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private apiUrl = 'http://localhost:8080/admin/categories';
  private apiUrlS = 'http://localhost:8080/admin/sous-categorie';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.apiUrl)
      .pipe(map((response: Category[]) => response));
  }

  getCategoryById(categoryId: number): Observable<Category> {
    return this.http
      .get<Category>(`${this.apiUrl}/${categoryId}`)
      .pipe(map((response: Category) => response));
  }

  getSousCategories(): Observable<sousCategorie[]> {
    return this.http
      .get<sousCategorie[]>(this.apiUrlS)
      .pipe(map((response: sousCategorie[]) => response));
  }

}
