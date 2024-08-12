import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButtons, IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter, IonModal, IonAvatar, IonList, ModalController} from '@ionic/angular/standalone';
import { ConnexionPage } from '../connexion/connexion.page';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter, IonModal, IonAvatar, IonList]
})
export class InscriptionPage implements OnInit {

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
