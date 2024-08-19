import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import {IonContent,IonButton, IonHeader, IonIcon, IonRouterLink, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {DetailserviceService} from "../Services/detailservice.service";
import {Produit} from "../Interface/Produit";

import {Router, RouterLinkActive} from "@angular/router";
import {addIcons} from "ionicons";
import {caretBackOutline} from "ionicons/icons";
=======
import {IonContent, IonHeader, IonIcon, IonRouterLink, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {DetailserviceService} from "../Services/detailservice.service";
import {Produit} from "../Interface/Produit";
import {Router, RouterLinkActive} from "@angular/router";
>>>>>>> 25bded750536e58e9bda2cee5981ff426b68f346

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonContent,IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonRouterLink, RouterLinkActive]
})
export class DetailPage {

 // Detailprod!:Produit[];

  constructor(
  private detailservice: DetailserviceService,
              private router:Router) {
    addIcons({caretBackOutline,
      })
      
  }


  goToPanier() {
    this.router.navigate(['/panier']);
  }

 

 /* ngOnInit() {
=======
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonRouterLink, RouterLinkActive]
})
export class DetailPage implements OnInit {

  Detailprod!:Produit[];

  constructor(private detailservice: DetailserviceService,
              private router:Router) { }

  ngOnInit() {
>>>>>>> 25bded750536e58e9bda2cee5981ff426b68f346

    this.detailservice.Detailproduit().subscribe(data =>{
      this.Detailprod=data;
    })
<<<<<<< HEAD
  }*/

  retourTab1() {
    this.router.navigate(['/']);
=======
  }

  retourTab1() {
    this.router.navigate(['/tabs/home']);

>>>>>>> 25bded750536e58e9bda2cee5981ff426b68f346

  }

}
