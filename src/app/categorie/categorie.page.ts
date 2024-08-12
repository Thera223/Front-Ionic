import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CategorieService } from '../Services/categorie.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: 'categorie.page.html',
  styleUrls: ['categorie.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonImg,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonSearchbar,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink
  ],
})
export class categoriePage {
  categories: any[] = [];
  filteredCategories: any[] = [];
  searchTerm: string = '';

  constructor(public categorieService: CategorieService) {}

  ngOnInit() {
    this.categorieService.getCategories().subscribe((data) => {
      this.categories = data;
      this.filteredCategories = data;
      console.log(data);
    });
  }

  filterCategories() {
    this.filteredCategories = this.categories.filter((category) =>
      category.libelle.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
