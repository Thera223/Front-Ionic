import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecuService,  } from '../Services/recu.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonItem, IonLabel, IonNote, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Recu } from '../Interface/recu';
import { HttpErrorResponse } from '@angular/common/http';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonNote, IonLabel, IonItem, IonListHeader, IonList, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CommonModule,   ]
})
export class RecuPage implements OnInit {
  total= 1500;
  items =[]
  recus: Recu[] = [];
   

  

  // recus: Recu[] = [];

  constructor(private recuService: RecuService,
    
  private route: ActivatedRoute
  ) {
   
  
  }

  generatePDF() {
    console.log('Le bouton a été cliqué!');
  
    const docDefinition: any = {
      content: [
        
        {
          text: 'REÇU A1B2C3',
          style: 'header'
        },
        {
          text: 'REF: EEA5T26Y7UZ',
          style: 'subheader'
        },
        {
          text: 'A:',
          style: 'sectionHeader'
        },
        {
          text: this.recus.map(recu => `
            ${recu.payement.commande.client.prenom} ${recu.payement.commande.client.nom}
            ${recu.payement.commande.client.adresse}
            ${recu.payement.commande.client.telephone}
          `).join('\n\n'),
          style: 'clientDetails'
        },
        {
          text: 'Détails de la commande',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              ['Produit', 'Prix', 'Quantité', 'Sous-total'],
              ...this.recus.flatMap(recu =>
                recu.payement.commande.produitCommandees.map(produitCommande => [
                  produitCommande.produit.libelle,
                  `${produitCommande.produit.prix} F CFA`,
                  `${produitCommande.produit.quantite}`,
                  `${produitCommande.produit.prix * produitCommande.produit.quantite} F CFA`
                ])
              ),
              ['', '', '', `${this.recus.reduce((sum, recu) => sum + recu.total, 0)} F CFA`]
            ]
          },
          layout: 'lightHorizontalLines'
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 14,
          margin: [0, 0, 0, 5]
        },
        sectionHeader: {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        clientDetails: {
          fontSize: 12,
          margin: [0, 0, 0, 10]
        }
      }
    };
  
    pdfMake.createPdf(docDefinition).download('recu.pdf');
  }
  
  
  
 
  imprimerPage() {
    window.print();
  }
  

  ngOnInit(): void {
    this.recuService.getRecus().subscribe(
      (data: Recu[]) => {
        this.recus = data;
        console.log('Reçus:', JSON.stringify(this.recus, null, 2));
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la récupération des reçus', error.message);
      }
    );
  }
}