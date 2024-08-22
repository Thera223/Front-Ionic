import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { PayementService } from '../Services/payement.service';
import { payementclient } from '../Interface/PayementClient';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ConfirmationPage implements OnInit {
  confirmation: payementclient[] = [];
  dernierPaiementId!: number;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private payementService: PayementService
  ) {}

  ngOnInit() {
    const clientId = 2; // Remplacez par l'ID du client actuel

    this.payementService.RecupererPayement(clientId).subscribe({
      next: (data) => {
        this.confirmation = data;
        if (this.confirmation.length > 0) {
          // Récupérer l'ID le plus élevé parmi tous les paiements effectués par le client
          this.dernierPaiementId = this.confirmation.reduce(
            (max, paiement) => Math.max(max, paiement.id),
            0
          );

          // Ajustement de l'ID de paiement pour correspondre à l'ID attendu
          this.dernierPaiementId -= 2;
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des paiements', err);
      },
    });
  }

  viewReceipt() {
    if (this.dernierPaiementId > 0) {
      this.router.navigate(['/recu', this.dernierPaiementId]);
    } else {
      console.error('Aucun paiement ID disponible pour afficher le reçu');
    }
  }

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }
}
