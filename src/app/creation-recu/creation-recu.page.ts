import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonImg, IonButton ,IonModal, ModalController} from '@ionic/angular/standalone';
import { ConnexionPage } from '../connexion/connexion.page';

@Component({
  selector: 'app-creation-recu',
  templateUrl: './creation-recu.page.html',
  styleUrls: ['./creation-recu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonImg, IonButton]
})
export class CreationRecuPage  {

  constructor(private modalCtrl: ModalController) {}
  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ConnexionPage,
      
     
    });

    

    modal.present();

 

  }
}
