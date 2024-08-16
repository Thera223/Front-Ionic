import { CUSTOM_ELEMENTS_SCHEMA,Component, Input, OnInit, ElementRef,  ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../Services/produit.service';
import { CategorieService, Category } from '../Services/categorie.service';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonSearchbar,IonCard,IonCol,IonRow,IonGrid,
  IonCardHeader,IonCardContent,IonLabel,IonIcon,IonItem,IonListHeader} from '@ionic/angular/standalone';
import {IonicSlides} from '@ionic/angular';
import { Router } from '@angular/router';
  @Component({
  selector: 'app-home',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,

  imports: [

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonCol,
    IonRow,
    IonGrid,
    IonSearchbar,
    IonCard,IonCardHeader,IonCardContent,IonLabel,IonIcon,IonItem,IonListHeader,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePage implements OnInit {
 
@Input() slides: any[]=[];
products: any[] = [];
filteredProducts: any[] = [];
categories: Category[] = [];
@Input() bestSellers: any[] = [];
SwiperModules = (IonicSlides)
@ViewChild('swiper')
swiperRef: ElementRef | undefined;
  constructor(private categorieService: CategorieService,
    private produitService: ProduitService,
    private router: Router
  ) {}
  ngOnInit(): void {
      this.slides=[
        {banner:'assets/imgmirashop/slide3.jpg'},
        {banner:'assets/imgmirashop/slide1.jpg'},
        {banner:'assets/imgmirashop/slide2.jpg'},
      ]
      this.loadProduits();
      this.loadCategories();
      
  this.bestSellers = [
    { image: 'assets/imgmirashop/powerbank.jpg', brand: 'Brand A' },
    { image: 'assets/imgmirashop/panieramadan.jpg', brand: 'Brand B' },
    { image: 'assets/imgmirashop/victoria.jpg', brand: 'Brand C' },
    { image: 'assets/imgmirashop/sac.jpg', brand: 'Brand D' },
  ];
  
  }
  loadCategories() {
    this.categorieService.getCategories().subscribe({
      next: (data: Category[]) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Erreur de chargement des catégories', err);
      }
    });
  }

  loadProduits() {
    this.produitService.getProduits().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: (err) => {
        console.error('Erreur de chargement des produits', err);
      }
    });
  }
  onSearch(event: any): void {
    const value = event.detail.value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(value)
    );
  }
  onSlideChange(event: any) {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
    console.log('event', event);
  }
  navigateToCategorie(): void {
    this.router.navigate(['/tabs/grid']);
  }
}
