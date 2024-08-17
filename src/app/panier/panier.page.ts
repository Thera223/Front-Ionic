import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonCard, IonImg, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { PanierClient, PanierserviceService } from '../Services/panierservice.service';
import { PanierAcuueilPage } from '../panier-accueil/panier-accueil.page';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonBackButton,PanierAcuueilPage, IonButtons, IonImg, IonCard, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PanierPage implements OnInit {


  constructor(private panierservice: PanierserviceService) {

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
     
    });
  }


// Fonction pour supprimer un produit du panier
supCard() {
  this.panierservice.supprimerPanier().subscribe(()=>{
    this.paniers=[];
    this.calculerTotalAllPanier();
  },
  error =>{
    console.log("Erreur de suppression");
  });
}
 

// fonction pour incrémentater le quantité
incrementePrd(produit: PanierClient){
  produit.id++;
  this.calculerTotalAllPanier();
}
//fonction pour Decrémentation
decrementePrd(produit:PanierClient){
  if(produit.id >1){
    produit.id--;
   this.calculerTotalAllPanier();
  }
}

//FOnction pour calculer les totaux
calculerTotalAllPanier(){
  this.totalPanier = this.paniers.reduce((total, produit) => total + (produit.prix * produit.id), 0);
}
}
