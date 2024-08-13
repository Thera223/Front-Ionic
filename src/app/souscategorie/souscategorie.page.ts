import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService, sousCategorie, Category } from '../Services/categorie.service'; 
import { IonicModule } from '@ionic/angular'; //
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-souscategory',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,

    
  ],
  templateUrl: './souscategorie.page.html',
})
export class SouscategoriePage implements OnInit {
  filteredCategories: Category[] = [];
  sousCategories: sousCategorie[] = [];
  categories: Category[] = [];
  categoryName: string = '';
Category: any;

  constructor(
    private route: ActivatedRoute,
    private categorieService: CategorieService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryId = params.get('id');
      if (categoryId) {
        this.loadSubcategories(categoryId);
      }
    });

    this.categorieService.getCategories().subscribe((data) => {
      this.categories = data;
      this.filterCategories(); 
      console.log(data);
    });
  }

  filterCategories() {
    this.filteredCategories = this.categories.filter((category) =>
      category.libelle.toLowerCase().includes(this.categoryName.toLowerCase())
    );
  }

  loadSubcategories(categoryId: string) {
    this.categorieService.getSousCategories().subscribe((sousCategories) => {
      
      
      this.sousCategories = sousCategories.filter(
        (sousCategory) => sousCategory.category.id === parseInt(categoryId)
      );

      
      if (this.sousCategories.length > 0) {
        this.categoryName = this.sousCategories[0].category.libelle;
      }
    });
  }
}


