import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonCard,
  IonImg,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { PanierserviceService } from '../Services/panierservice.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonImg,
    IonCard,
    IonIcon,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class PanierPage implements OnInit {
  produits: any[] = [];
  totalPanier: number = 0;

  constructor(
    private panierService: PanierserviceService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    const panierId = 1; // Remplacez par l'ID réel du panier
    this.panierService.listProduitsPanier(panierId).subscribe((produits) => {
      console.log(produits);
      this.produits = produits.map((produit) => ({
        id: produit.id,
        nom: produit.libelle,
        imagSrc:
          produit.fileInfo && produit.fileInfo.length > 0
            ? produit.fileInfo[0].url
            : 'assets/img/default.png',
        prixUnitaire: produit.prix,
        quantite: produit.quantite || 0,
        totalUnitaire: produit.prixUnitaire * produit.quantite,
      }));
      this.calculerTotals();
    });
  }

  // la fonction pour supprimer provisoirement le card
  supCard(event: Event) {
    const CardElement = (event.target as HTMLElement).closest('ion-card');
    if (CardElement) {
      CardElement.remove();
    }
  }

  // Fonctions pour incrémenter et décrémenter la quantité d'un produit spécifique
  incremente(produitId: number) {
    const produit = this.produits.find((p) => p.id === produitId);
    if (produit) {
      produit.quantite++;
      this.calculerTotals();
      this.panierService
        .ajouterProduit(1, produitId, produit.quantite)
        .subscribe();
    }
  }
  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }

  decremente(produitId: number) {
    const produit = this.produits.find((p) => p.id === produitId);
    if (produit && produit.quantite > 0) {
      produit.quantite--;
      this.calculerTotals();
    }
  }

  // Fonction pour calculer les totaux
  calculerTotals() {
    this.totalPanier = this.produits.reduce(
      (total, produit) => total + produit.prixUnitaire * produit.quantite,
      0
    );
    this.produits.forEach((produit) => {
      produit.totalUnitaire = produit.prixUnitaire * produit.quantite;
    });
  }
}
