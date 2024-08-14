import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modifie-mot-de-passe',
  templateUrl: './modifie-mot-de-passe.page.html',
  styleUrls: ['./modifie-mot-de-passe.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ModifieMotDePassePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
