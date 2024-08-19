<<<<<<< HEAD
import { Component, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
   IonButton,
  IonButtons,
  IonItem,
  IonModal
  
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonItem,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonModal
  ],
})
export class Tab4Page   {
  @ViewChild(IonModal) modal!: IonModal;

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
=======
import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAvatar,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonIcon,
  IonList,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle,
    IonLabel,
    IonItem,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonAvatar,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonCard,
    IonList,
    IonIcon,
  ],
})
export class Tab4Page {
  constructor(private navCtrl: NavController) {}

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }

  logout() {
    // Implémentez ici la logique de déconnexion
    console.log('Déconnexion');
  }
}

>>>>>>> 578e8dc (code)
