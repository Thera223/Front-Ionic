import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';


@Component({
  selector: 'app-panier-acuueil',
  templateUrl: './panier-accueil.page.html',
  styleUrls: ['./panier-accueil.page.scss'],
  standalone: true,
  imports: [IonIcon, IonBackButton, IonButtons, 
     IonImg, IonContent, IonHeader, IonTitle, 
     IonToolbar, CommonModule, FormsModule,
    
    ]
})
export class PanierAcuueilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
