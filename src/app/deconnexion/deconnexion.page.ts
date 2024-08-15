import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.page.html',
  styleUrls: ['./deconnexion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DeconnexionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
