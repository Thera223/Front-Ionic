import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonCard, IonImg, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { PanierClient, PanierserviceService } from '../Services/panierservice.service';
import { PanierAcuueilPage } from '../panier-accueil/panier-accueil.page';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { addOutline, chevronDownCircleOutline, closeOutline, removeOutline } from 'ionicons/icons';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonBackButton,PanierAcuueilPage,RouterLink, IonButtons, IonImg, IonCard, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PanierPage implements OnInit {


  constructor(private panierservice: PanierserviceService) {
    addIcons({closeOutline,removeOutline, addOutline,chevronDownCircleOutline});
   }
  

  ngOnInit() {
   this. getPanier();
   this.calculerTotalAllPanier();
  }
// créer un tableau de recupération 
  paniers:PanierClient[]=[]
  totalPanier= 0;

  
  getPanier() {
    this.panierservice.getPaner().subscribe(data => {
      this.paniers = data;
      this.calculerTotalAllPanier();
      // console.log(this.paniers);
    
      // console.log(data);
      
      
    });
  }

  
  supCard(clientId: number, panierId: number) {
    this.panierservice.supprimerPanier(clientId, panierId).subscribe(
      () => {
      },
      (error) => {
        console.error('Erreur de suppression :', error);
      }
    );
  }

// fonction pour incrémentater le quantité
incrementePrd(produit: any){
  // console.log("clicked !", produit);
  produit.quantite = produit.quantite+1;
    let nouvelleQuantite = produit.quantite;
  this.panierservice.updatePanier(1, produit.id, nouvelleQuantite);
  this.calculerTotalAllPanier();
}
//fonction pour Decrémentation
decrementePrd(produit:any){
  // console.log("clicked !", produit);
  if(produit.quantite > 1){
    produit.quantite = produit.quantite-1;
    let nouvelleQuantite = produit.quantite;
    this.panierservice.updatePanier(1, produit.id, nouvelleQuantite);   
   this.calculerTotalAllPanier();
  }
}

//FOnction pour calculer les totaux
calculerTotalAllPanier(){
  this.totalPanier = this.paniers.reduce((total, produit) => total + (produit.produit.prix * produit.quantite), 0);

}
}
