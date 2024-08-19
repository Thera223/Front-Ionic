import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { SouscateserviceService } from '../Services/souscateservice.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './souscategorie.page.html',
  styleUrls: ['./souscategorie.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonButtons,
    IonIcon,
  ],
})
export class SouscategoriePage implements OnInit {
  listFile: any[] = [];
  // listFile: any[] = [
  //   {
  //     name: 'Panier damou',
  //     price: '5.000',
  //     image: 'assets/imgmirashop/panieramadan.jpg',
  //   },
  //   { name: 'Sac', price: '25.000', image: 'assets/imgmirashop/sac.jpg' },
  //   {
  //     name: 'Power Bank',
  //     price: '5.000',
  //     image: 'assets/imgmirashop/powerbank.jpg',
  //   },
  //   { name: 'Canape', price: '45.000', image: 'assets/imgmirashop/canape.jpg' },
  //   { name: 'Watch', price: '12.000', image: 'assets/imgmirashop/watch.jpg' },
  //   {
  //     name: 'Robe Rouge',
  //     price: '30.000',
  //     image: 'assets/imgmirashop/roberouge.jpg',
  //   },
  //   {
  //     name: 'Victoria Secret',
  //     price: '30.000',
  //     image: 'assets/imgmirashop/victoria.jpg',
  //   },
  //   { name: 'Talon', price: '30.000', image: 'assets/imgmirashop/talon.jpg' },
  // ];

  sousCategories: any[] = [];
  listile: any[] = [];
  selectedButton: number | null = 0;

  constructor(
    private router: Router,
    private souscateService: SouscateserviceService
  ) {
    addIcons({ arrowBack });
  }

  // ngOnInit() {
  //   // this.souscateService.listFiles().subscribe((files)=>this.listFile = files);
  //   this.souscateService.getSousCategories().subscribe((data) => {this.sousCategories = data; console.log(data);
  //   });
  //   this.souscateService.getProduitBySousCategorieUrl(1).subscribe((p) => console.log(p));
  // }

  ngOnInit() {
    this.souscateService.getSousCategories().subscribe((response) => {
      this.sousCategories = response.data || response; // Si `data` est la clé contenant le tableau
      console.log(this.sousCategories);
    });
  }
  changeColor(index: number) {
    if (this.selectedButton === index) {
      this.selectedButton = null;
    } else {
      this.selectedButton = index;
    }
  }

  navigate(index: any) {
    this.router.navigateByUrl('detail/' + index);
    console.log(index);
  }
}
