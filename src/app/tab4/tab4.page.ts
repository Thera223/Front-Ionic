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
  IonButton,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';
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
    IonButton
  ],
})
export class Tab4Page {
  
  
  constructor(private navCtrl: NavController, private router: Router) {}

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }
  title = 'mirashop';
  logIN: boolean = false;

  ngOnInit(): void {
    let auth = localStorage.getItem('authToken');
    if (auth != null) {
      this.logIN = true;
    }
  }

  verifier(value:any) {    
    this.logIN = value;
  }

  logout() {
    localStorage.clear();
    this.logIN = false;
    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
   
  }
}



