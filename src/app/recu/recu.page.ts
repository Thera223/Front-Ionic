import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecuService } from '../Services/recu.service';
import { Recu } from '../Interface/recu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonGrid, IonRow, IonCol,IonHeader,IonToolbar,IonButton,IonIcon,IonBackButton } from "@ionic/angular/standalone";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonContent, CommonModule, RouterModule,IonHeader,IonToolbar,IonButton,IonIcon,IonBackButton],
})
export class RecuPage implements OnInit {

  recu: Recu | null = null;
  errorMessage: string | null = null;

  constructor(
    private recuService: RecuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  goBack() {
    this.router.navigate(['/historiques']);
  }

  ngOnInit() {
    // Récupérer l'ID du reçu depuis l'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getRecu(id);
    } else {
      this.errorMessage = 'ID de reçu non trouvé';
    }
  }

  // Méthode pour récupérer le reçu par ID
  getRecu(id: number) {
    this.recuService.getRecuById(id).subscribe(
      (data: Recu) => {
        this.recu = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Erreur lors de la récupération du reçu:', error);
        this.errorMessage = 'Erreur lors de la récupération du reçu.';
        this.recu = null;
      }
    );
  }

  generatePDF() {
    if (!this.recu) return;

    const docDefinition: any = {
      content: [
        {
          text: `REÇU ${this.recu.id}`,
          style: 'header'
        },
        {
          text: `REF: RECS25627`, 
          style: 'subheader'
        },
        {
          text: 'A:',
          style: 'sectionHeader'
        },
        {
          text: `
            ${this.recu.payement.commande.client.prenom} ${this.recu.payement.commande.client.nom}
            ${this.recu.payement.commande.client.adresse}
            ${this.recu.payement.commande.client.telephone}
          `,
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
              ...this.recu.payement.commande.produitCommandees.map(produitCommande => [
                produitCommande.produit.libelle,
                `${produitCommande.produit.prix} F CFA`,
                `${produitCommande.quantite}`,
                `${produitCommande.produit.prix * produitCommande.quantite} F CFA`
              ]),
              ['', '', '', `${this.recu.total} F CFA`] // Montant total du reçu
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
}