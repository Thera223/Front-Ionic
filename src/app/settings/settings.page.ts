import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonList,
  IonCardSubtitle,
  IonCardHeader,
  IonCard,
  IonSelectOption,
  IonSelect,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonImg,
  IonCol,
  IonGrid,
  IonRow,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonIcon,
    IonButton,
    IonButtons,
    IonRow,
    IonGrid,
    IonCol,
    IonImg,
    IonLabel,
    IonItem,
    IonCheckbox,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonList,
    IonInput,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCardSubtitle,
    IonSelectOption,
    CommonModule,
    IonSelect,
    FormsModule,
  ],
})
export class SettingsPage {
  constructor(private navCtrl: NavController) {}

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }

 
}
