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
  IonSpinner,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { User } from '../Interface/user';
import { UsersService } from '../Services/userservice.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
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
    CommonModule,
    IonIcon,
  ],
})
export class Tab4Page {
  users: User[] = [];
  username: string = '';
  email: string = '';

  constructor(
    private navCtrl: NavController,
    private userservice: UsersService // private cdr: ChangeDetectorRef // Injectez le ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userservice.findAll().subscribe((data) => {
      if (data.length > 0) {
        this.username = data[0].username; // Affichez les données du premier utilisateur
        this.email = data[0].email;
      }
    });
  }

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }

  logout() {
    console.log('Déconnexion');
  }
}
