import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecuService, TotalCommandeResponse } from '../Services/recu.service';
import { Recu } from '../Interface/recu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonContent, CommonModule, RouterModule],
})
export class RecuPage implements OnInit {
  recu: Recu | null = null;
  totalCommande: number = 0;
  coutLivraison: number = 0;
  errorMessage: string | null = null;

  constructor(
    private recuService: RecuService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getRecuDetails(id);
    } else {
      this.errorMessage = 'ID de reçu non trouvé';
    }
  }

  getRecuDetails(id: number) {
    this.recuService.getRecuById(id).subscribe(
      (data: Recu) => {
        this.recu = data;
        this.errorMessage = null;

        if (this.recu && this.recu.payement) {
          const commandeId = this.recu.payement.commande.id;
          this.getTotalCommande(commandeId);
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération du reçu:', error);
        this.errorMessage = 'Erreur lors de la récupération du reçu.';
        this.recu = null;
      }
    );
  }

  getTotalCommande(commandeId: number) {
    this.recuService.getTotalCommande(commandeId).subscribe(
      (data: TotalCommandeResponse) => {
        this.totalCommande = data.totalCommande;
        this.coutLivraison = data.coutLivraison;
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération du total de la commande:',
          error
        );
      }
    );
  }

  generatePDF() {
    if (!this.recu) return;

    const docDefinition: any = {
      content: [
        {
          text: `REÇU ${this.recu.id}`,
          style: 'header',
        },
        {
          text: `REF: RECS25627`,
          style: 'subheader',
        },
        {
          text: 'A:',
          style: 'sectionHeader',
        },
        {
          text: `
            ${this.recu.payement.commande.client.prenom} ${this.recu.payement.commande.client.nom}
            ${this.recu.payement.commande.client.adresse}
            ${this.recu.payement.commande.client.telephone}
          `,
          style: 'clientDetails',
        },
        {
          text: 'Détails de la commande',
          style: 'sectionHeader',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              ['Produit', 'Prix', 'Quantité', 'Sous-total'],
              ...this.recu.payement.commande.produitCommandees.map(
                (produitCommande) => [
                  produitCommande.produit.libelle,
                  `${produitCommande.produit.prix} F CFA`,
                  `${produitCommande.quantite}`,
                  `${
                    produitCommande.produit.prix * produitCommande.quantite
                  } F CFA`,
                ]
              ),
              [
                { text: 'Coût de livraison', colSpan: 3 },
                {},
                {},
                `${this.coutLivraison} F CFA`,
              ],
              ['', '', '', `${this.totalCommande} F CFA`], // Montant total du reçu
            ],
          },
          layout: 'lightHorizontalLines',
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 14,
          margin: [0, 0, 0, 5],
        },
        sectionHeader: {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        clientDetails: {
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
      },
    };

    pdfMake.createPdf(docDefinition).download('recu.pdf');
  }

  imprimerPage() {
    window.print();
  }
}
