import { CUSTOM_ELEMENTS_SCHEMA,Component, Input, OnInit, ElementRef,  ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonSearchbar,IonCard,IonCol,IonRow,IonGrid,
  IonCardHeader,IonCardContent,IonLabel,IonIcon,IonItem,IonListHeader} from '@ionic/angular/standalone';
import {IonicModule, IonicSlides} from '@ionic/angular';
import { DetailserviceService } from '../Services/detailservice.service';
import { Produit } from '../Interface/Produit';
import {RouterLink} from "@angular/router";
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
      IonCard, IonCardHeader, IonCardContent, IonLabel, IonIcon, IonItem, IonListHeader, CommonModule, IonicModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePage implements OnInit {
  Detailprod!:Produit[]

// @Input() slides: any[]=[];
// @Input() products: any[] = [];
// categories: string[] = ['Cosmétique', 'Meuble','Arme', 'Vêtement', 'Électronique'];
// @Input() bestSellers: any[] = [];
// filteredProducts: any[] = [];
// SwiperModules = (IonicSlides)
// @ViewChild('swiper')
// swiperRef: ElementRef | undefined;
  constructor( private detailservice:DetailserviceService) {}
  ngOnInit(): void {
    this.detailservice.Detailproduit().subscribe(data =>{
      this.Detailprod=data;
    })




  //     this.slides=[
  //       {banner:'assets/imgmirashop/slide3.jpg'},
  //       {banner:'assets/imgmirashop/slide1.jpg'},
  //       {banner:'assets/imgmirashop/slide2.jpg'},
  //     ]
  //     this.products = [
  //       { name: 'Panier damou', price: '5.000', image: 'assets/imgmirashop/panieramadan.jpg' },
  //       { name: 'Sac', price: '25.000', image: 'assets/imgmirashop/sac.jpg' },
  //       { name: 'Power Bank', price: '5.000', image: 'assets/imgmirashop/powerbank.jpg' },
  //       { name: 'Canape', price: '45.000', image: 'assets/imgmirashop/canape.jpg' },
  //       { name: 'Watch', price: '12.000', image: 'assets/imgmirashop/watch.jpg' },
  //       { name: 'Robe Rouge', price: '30.000', image: 'assets/imgmirashop/roberouge.jpg' },
  //       { name: 'Victoria Secret', price: '30.000', image: 'assets/imgmirashop/victoria.jpg' },
  //       { name: 'Talon', price: '30.000', image: 'assets/imgmirashop/talon.jpg' },
  //     ];
  //     this.filteredProducts = this.products;

  // this.bestSellers = [
  //   { image: 'assets/imgmirashop/powerbank.jpg', brand: 'Brand A' },
  //   { image: 'assets/imgmirashop/panieramadan.jpg', brand: 'Brand B' },
  //   { image: 'assets/imgmirashop/victoria.jpg', brand: 'Brand C' },
  //   { image: 'assets/imgmirashop/sac.jpg', brand: 'Brand D' },
  // ];

  // }
  // onSearch(event: any): void {
  //   const value = event.detail.value.toLowerCase();
  //   this.filteredProducts = this.products.filter(product =>
  //     product.name.toLowerCase().includes(value)
  //   );
  // }
  // onSlideChange(event: any) {
  //   console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  //   console.log('event', event);
  }
}
