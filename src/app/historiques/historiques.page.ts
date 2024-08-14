import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonListHeader,IonTabBar,IonTabs, IonIcon, IonTabButton,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { commande } from '../Interface/commande';
import { CommandeService } from '../Services/commande.service';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.page.html',
  styleUrls: ['./historiques.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList,IonLabel, IonItem, IonListHeader, IonTabBar,IonTabs,IonIcon,IonTabButton,IonButtons,IonBackButton]
})
export class HistoriquesPage implements OnInit {
  historique!:commande[]
  constructor(private commandeservice : CommandeService) {
    
   }
 

  paiements = [
    { id: 1, date: new Date('2023-06-20') },
    { id: 2, date: new Date('2023-07-25') },
    { id: 3, date: new Date('2023-08-05') },
    { id: 1, date: new Date('2023-06-20') },
    { id: 2, date: new Date('2023-07-25') },
    { id: 3, date: new Date('2023-08-05') },
    { id: 1, date: new Date('2023-06-20') },
    { id: 2, date: new Date('2023-07-25') },
    { id: 3, date: new Date('2023-08-05') },
    { id: 1, date: new Date('2023-06-20') },
    { id: 2, date: new Date('2023-07-25') },
    { id: 3, date: new Date('2023-08-05') },
  ];
  ngOnInit() {
    this.commandeservice.RecupererCommande().subscribe(data=>{
      this.historique=data
    })
  }

}