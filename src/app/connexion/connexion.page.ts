import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons, IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter, IonModal, IonAvatar, IonList, ModalController } from '@ionic/angular/standalone';
import { InscriptionPage } from '../inscription/inscription.page';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,CommonModule, FormsModule,IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter, IonModal, IonAvatar, IonList]
})
export class ConnexionPage implements OnInit {


  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss('confirm');
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ConnexionPage,
      
     
    });

    

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
  }
  async openModal1() {
    const modal = await this.modalCtrl.create({
   
      component:InscriptionPage,
     
    });

    

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
  }


  ngOnInit() {
  }

}
