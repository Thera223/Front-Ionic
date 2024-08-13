import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonItem,
  IonIcon,
  IonInput, IonButtons, IonBackButton, IonNote } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ProduitserviceService } from '../Services/produitservice.service';
import { PanierserviceService } from '../Services/panierservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonNote, IonBackButton, IonButtons, 
    IonInput,
    IonIcon,
    IonItem,
    IonSearchbar,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink,
    ExploreContainerComponent,
  ],
})
export class Tab1Page implements OnInit {
  constructor(
    private produitservice: ProduitserviceService,
    private panierService: PanierserviceService
  ) {}
  ngOnInit() {
    this.loadProduits();
    this.listPpanier();
  }

  loadProduits(): void {
    this.produitservice.getProduit().subscribe((data) => {
      console.log(data);
    });
  }

  ajoutPanier() {
    this.panierService.ajouterProduit(2, 1, 2).subscribe((data) => {
      console.log(data);
    });
  }

  listPpanier() {
    this.panierService.listProduitsPanier(1).subscribe((data) => {
      console.log(data);
    });
  }
}

