import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
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
import { PanierAcuueilPage } from '../panier-accueil/panier-accueil.page';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  addOutline,
  chevronDownCircleOutline,
  closeOutline,
  removeOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    PanierAcuueilPage,
    RouterLink,
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
  clientId: number = 2; // ID du client à adapter à ton application
  panier: any = { produits: [] };
  paniers: any[] = [];
  panierId: number = 1;
  // paniers: PanierClient[] = [];
  totalPanier = 0;

  constructor(
    private panierservice: PanierserviceService,
    private alertController: AlertController,
    private router: Router
  ) {
    addIcons({
      closeOutline,
      removeOutline,
      addOutline,
      chevronDownCircleOutline,
    });
  }

  ngOnInit() {
    this.getPanier();
  }

  getPanier() {
    this.panierservice.getPanier(this.clientId).subscribe(
      (data) => {
        // Si data est directement le tableau de produits
        this.paniers = data; // Pas de `produits`, car `data` est le tableau
        this.calculerTotalAllPanier();
      },
      (error) => {
        console.error('Erreur lors de la récupération du panier', error);
      }
    );
  }

  calculerTotalAllPanier() {
    this.totalPanier = this.paniers.reduce(
      (total, produit) => total + produit.produit.prix * produit.quantite,
      0
    );
  }

  supprimerProduit(produitCommandee: any) {
    const produitId = produitCommandee.id; // ID de ProduitCommandee
    this.panierservice
      .supprimerProduitDuPanier(this.clientId, this.panierId, produitId)
      .subscribe(
        () => {
          this.getPanier(); // Rafraîchit le panier après suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression du produit :', error);
        }
      );
  }

  incrementePrd(produitCommandee: any) {
    const nouvelleQuantite = produitCommandee.quantite + 1;
    this.panierservice
      .updateQuantitePanier(
        this.clientId,
        this.panierId,
        produitCommandee.id,
        nouvelleQuantite
      )
      .subscribe(
        () => {
          produitCommandee.quantite = nouvelleQuantite;
          this.calculerTotalAllPanier();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du panier :', error);
        }
      );
  }

  decrementePrd(produitCommandee: any) {
    if (produitCommandee.quantite > 1) {
      const nouvelleQuantite = produitCommandee.quantite - 1;
      this.panierservice
        .updateQuantitePanier(
          this.clientId,
          this.panierId,
          produitCommandee.id,
          nouvelleQuantite
        )
        .subscribe(
          () => {
            produitCommandee.quantite = nouvelleQuantite;
            this.calculerTotalAllPanier();
          },
          (error) => {
            console.error('Erreur lors de la mise à jour du panier :', error);
          }
        );
    } else {
      this.presentAlert('La quantité ne peut pas être inférieure à 1');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  passerCommande() {
    const produitsCommandes = this.paniers.map((p) => ({
      produit: { id: p.produit.id },
      quantite: p.quantite,
    }));

    this.panierservice
      .passerCommande(produitsCommandes, this.panierId)
      .subscribe(
        (response) => {
          console.log('Commande passée avec succès', response);
          this.router.navigate(['/livraison']);
        },
        (error: any) => {
          console.error('Erreur lors du passage de la commande', error);
        }
      );
  }
}
