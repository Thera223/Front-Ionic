import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonHeader,
  IonIcon,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  IonImg
} from '@ionic/angular/standalone';
import {DetailserviceService} from "../Services/detailservice.service";
import {Produit} from "../Interface/Produit";

import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {addIcons} from "ionicons";
import {caretBackOutline, images} from "ionicons/icons";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonRouterLink, RouterLinkActive, IonImg]
})
export class DetailPage implements OnInit {


  id!:number;
  images: string[] = [];
  Detailprod!:Produit;
  variantes: any[] = []; // Contient les variantes du produit

  constructor(
  private detailservice: DetailserviceService,
              private router:Router,
  private route: ActivatedRoute) {
    addIcons({caretBackOutline,
      })

  }


  goToPanier() {
    this.router.navigate(['/panier']);
  }



  ngOnInit() {
    this.id = this.route.snapshot.params["id"]
    this.detailservice.afficherdetailproduit(this.id).subscribe(data =>{
      this.Detailprod=data;
      this.images=data.images;
      this.variantes = data.variantes; // Ajout des variantes
        console.log('Détails du produit:', this.Detailprod);
        console.log('Liste des images de mon  produit :', this.images); // Vérifie que la liste des images est correcte
        console.log('Afficher les differentes variables de mon produit')
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails du produit:', error);
  })


}

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  retourTab1() {
    this.router.navigate(['/']);

  }

}
