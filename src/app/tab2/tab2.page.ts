import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
=======
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
>>>>>>> 578e8dc (code)
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}

}
=======
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
export class Tab2Page {
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
