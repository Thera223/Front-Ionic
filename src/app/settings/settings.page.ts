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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
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
export class SettingsPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }
}
