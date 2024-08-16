import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonCard, IonImg, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { car, card } from 'ionicons/icons';

export interface Card{
  nom: string;
  prix : number;
  imagSrc: string
  panierQuantite: number
}

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonImg, IonCard, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PanierPage implements OnInit {

  calculertotal: number= 0;
  constructor() {

   }
  //  {nom: 'Pc',prix:20000, imagSrc:"assets/icon/pc.png", panierQuantite:2

  ngOnInit() {
    this.calculerTotals();
  }

  produits = [
    { nom: "PC",imagSrc:"assets/icon/pc.png", prixUnitaire: 100000, quantite: 0 ,totalUnitaire: 0 },
    { nom: "Alliment",imagSrc:"assets/icon/banane.png", prixUnitaire: 1000, quantite: 0,totalUnitaire: 0  },
    { nom: "kito",imagSrc:"assets/icon/kito.png", prixUnitaire: 3000, quantite: 0 ,totalUnitaire: 0 },
    // Ajoutez d'autres produits ici selon les besoins
  ];

  totalPanier: number = 0;
// la fonction pour supprimer provisoirement le card
  supCard(event: Event){
    const CardElement= (event.target as HTMLElement).closest('ion-card');
    if(CardElement){
      CardElement.remove();
    }
  }
  // Fonctions pour incrémenter et décrémenter la quantité d'un produit spécifique
  incremente(nomProduit: string){
    const produit = this.produits.find(p => p.nom === nomProduit);
    if (produit) {
      produit.quantite++;
      this.calculerTotals();
    }
  }
  
  decremente(nomProduit: string){
    const produit = this.produits.find(p => p.nom === nomProduit);
    if (produit && produit.quantite > 0) {
      produit.quantite--;
      this.calculerTotals();
    }
  }
  
  // Fonction pour calculer les totaux
  calculerTotals() {
    this.totalPanier = this.produits.reduce((total, produit) => total + (produit.prixUnitaire * produit.quantite), 0);
  
    // Supposons que vous vouliez mettre à jour totalUnitaire pour chaque produit
    this.produits.forEach(produit => {
      produit.totalUnitaire = produit.prixUnitaire * produit.quantite;
    });
  }
}
