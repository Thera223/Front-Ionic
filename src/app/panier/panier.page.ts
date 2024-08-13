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

  ngOnInit() {
    this.calculerTotal();
  }

  cards: Card[]=[
    {nom: 'Pc',prix:20000, imagSrc:"assets/icon/pc.png", panierQuantite:2
    },
    {nom: 'Meuble',prix:30000, imagSrc:"assets/icon/MEUBLE.png", panierQuantite:1},
    {nom: 'Alliment',prix:1000, imagSrc:"assets/icon/banane.png", panierQuantite:3},
    {nom: 'Kito',prix:2000, imagSrc:"assets/icon/kito.png", panierQuantite:1},

  ]

  
  panierQuantite: number=0
// la fonction pour supprimer provisoirement le card
  supCard(event: Event){
    const CardElement= (event.target as HTMLElement).closest('ion-card');
    if(CardElement){
      CardElement.remove();
    }
  }
  // Les fonction pour incrementer et decrementer
  incremente(cardt : Card){
    this.panierQuantite++;
    this.calculerTotal();
  }
  decremente( cardt : Card){
    if(this.panierQuantite >0){
      this.panierQuantite--;
      this.calculerTotal();
    }
  }
  calculerTotal(): number {
    return this.cards.reduce((acc, cardt) => acc + (cardt.prix * cardt.panierQuantite), 0);
  }


}
