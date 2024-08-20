import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonListHeader,IonTabBar,IonTabs, IonIcon, IonTabButton,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { commande } from '../Interface/commande';
import { CommandeService } from '../Services/commande.service';
import { PayementClientService } from '../Services/payement-client.service';
import { payementclient } from '../Interface/PayementClient';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.page.html',
  styleUrls: ['./historiques.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList,IonLabel, IonItem, IonListHeader, IonTabBar,IonTabs,IonIcon,IonTabButton,IonButtons,IonBackButton]
})
export class HistoriquesPage implements OnInit {
  historique!:commande[]

  historique1!: payementclient[]


  
  constructor(private commandeservice : CommandeService, private payementClientservice : PayementClientService) {
    
   }


  ngOnInit() {
  
    const clientId = 2; 

    this.commandeservice.RecupererCommande(clientId).subscribe({
      next: (data) => {
        this.historique = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des commandes', err);
      }
    });

    this.payementClientservice.RecupererPayement(clientId).subscribe({
      next: (data1)=> {
        this.historique1 = data1;
      },
      error: (err) =>{
        console.error('Erreur lors de la récupération des payement', err);
          
      },
    });

}

}