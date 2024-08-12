import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonItem,
  IonIcon,
  IonInput, IonRouterLink,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ProduitserviceService } from '../Services/produitservice.service';
import { PanierserviceService } from '../Services/panierservice.service';
import {Produit} from "../Interface/Produit";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonIcon,
    IonItem,
    IonSearchbar,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    NgForOf,
    IonRouterLink,
    RouterLink,
  ],
})
export class Tab1Page implements OnInit {
  test!:Produit[]
  constructor(
    private produitservice: ProduitserviceService,
    private panierService: PanierserviceService
  ) {}
  ngOnInit() {
    this.loadProduits();
    this.produitservice.getProduit().subscribe((data) => {
      this.test=data
      console.log(data);
    });
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

