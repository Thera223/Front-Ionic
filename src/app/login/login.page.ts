import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter,IonModal, ModalController } from '@ionic/angular/standalone';
import { InscriptionPage } from '../inscription/inscription.page';
import { ConnexionPage } from '../connexion/connexion.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter,IonModal]
})
export class LoginPage implements OnInit {

  constructor(private modalCtrl: ModalController) {}

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
