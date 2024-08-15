import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
  standalone: true,
  imports: [IonNote, IonLabel, IonItem, IonListHeader, IonList, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CommonModule,  ]
})
export class RecuPage implements OnInit {
  total= 1500;
  items =[]

  

  constructor() { }

  ngOnInit() {
  }

}
