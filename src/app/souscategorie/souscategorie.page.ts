import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CategorieService,
  sousCategorie,
  Category,
  Produits,
} from '../Services/categorie.service';
import { IonicModule } from '@ionic/angular'; //
import { CommonModule } from '@angular/common';


// -------------------------------
@Component({
  selector: 'app-souscategory',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './souscategorie.page.html',
  styleUrls: ['./souscategorie.page.scss'],
})

//
export class SouscategoriePage implements OnInit {
  changePage($event: Event) {
    throw new Error('Method not implemented.');
  }
  filteredCategories: Category[] = [];
  sousCategories: sousCategorie[] = [];
  categories: Category[] = [];
  categoryName: string = '';
  Category: any;
  range: any;
  Produits: Produits[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categorieService: CategorieService
  ) {}
  goTopage() {
    this.router.navigate(['/categorie']);
  }
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
      this.loadProduits(this.sousCategories[0].id);
    });
  }

  // Load products for the selected sous-category
  loadProduits(sousCategoryId: number) {
    this.categorieService.getProduits(sousCategoryId).subscribe((produits) => {
      this.Produits = produits;
      if (this.Produits.length > 0) {
        console.log('Produits:', this.Produits);
      }
    });
  }

  // Handle sous-categorie click
  onSousCategoriesClick(sousCategoryId: number) {
    this.loadProduits(sousCategoryId);
  }
}