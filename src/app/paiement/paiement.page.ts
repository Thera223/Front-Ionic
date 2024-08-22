import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayementService } from '../Services/payement.service';
import {
  IonicModule,
  ToastController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, FormsModule, CommonModule, NgIf],
})
export class PaiementPage implements OnInit {
  paiementForm: FormGroup;
  commandes: any[] = [];
  modesPaiement: any[] = [];
  selectedCommande: any = null;
  isPaymentProcessing: boolean = false;
  isSummaryVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private paiementService: PayementService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.paiementForm = this.fb.group({
      commandeId: ['', Validators.required],
      modePaiement: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadCommandes();
    this.loadModesPaiement();
  }

  async loadCommandes() {
    const loading = await this.loadingController.create({
      message: 'Chargement des commandes...',
    });
    await loading.present();

    this.paiementService.getCommandes().subscribe(
      (data) => {
        this.commandes = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        if (this.commandes.length > 0) {
          this.commandes[0].isNew = true;
        }
        loading.dismiss();
      },
      (error) => {
        console.error('Erreur lors du chargement des commandes', error);
        this.presentToast('Erreur lors du chargement des commandes', 'danger');
        loading.dismiss();
      }
    );
  }

  loadModesPaiement() {
    this.modesPaiement = [
      {
        id: 'paypal',
        name: 'PayPal',
        logo: 'assets/paypal.png',
      },
      {
        id: 'orange_money',
        name: 'Orange Money',
        logo: 'assets/orange_money.png',
      },
      {
        id: 'mastercard',
        name: 'MasterCard',
        logo: 'assets/mastercard.png',
      },
    ];
  }

  onCommandeChange() {
    const selectedId = this.paiementForm.value.commandeId;
    this.selectedCommande = this.commandes.find((cmd) => cmd.id === selectedId);

    if (this.selectedCommande) {
      const infosPaiement = this.getInformationsPaiement();
      this.selectedCommande.totalAPayer = infosPaiement.totalAPayer;
    }

    this.isSummaryVisible = false;
  }

  getInformationsPaiement() {
    if (this.selectedCommande) {
      const totalCommande = this.selectedCommande.total || 0;
      const coutLivraison =
        this.selectedCommande.livraison?.typeLivraison?.prix || 0;
      const totalAPayer = totalCommande + coutLivraison;

      return {
        totalCommande,
        coutLivraison,
        totalAPayer,
      };
    }
    // Renvoie un objet avec des valeurs par défaut si `selectedCommande` est null
    return {
      totalCommande: 0,
      coutLivraison: 0,
      totalAPayer: 0,
    };
  }

  afficherRecapitulatif() {
    if (this.paiementForm.valid && this.selectedCommande) {
      const infos = this.getInformationsPaiement(); // Ce ne sera jamais `null` maintenant
      this.isSummaryVisible = true;
    } else {
      this.presentToast(
        'Veuillez sélectionner une commande et un mode de paiement',
        'danger'
      );
    }
  }

  async confirmerPaiement() {
    if (this.paiementForm.valid && this.selectedCommande) {
      const alert = await this.alertController.create({
        header: 'Confirmation',
        message: `Êtes-vous sûr de vouloir payer la commande <strong>#${
          this.selectedCommande.id
        }</strong> via <strong>${this.getSelectedModeName()}</strong> ?`,
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
          },
          {
            text: 'Confirmer',
            handler: () => {
              this.effectuerPaiement();
            },
          },
        ],
      });

      await alert.present();
    } else {
      this.presentToast(
        'Veuillez compléter le formulaire avant de confirmer le paiement',
        'danger'
      );
    }
  }

  async effectuerPaiement() {
    if (!this.selectedCommande) return;

    this.isPaymentProcessing = true;
    const loading = await this.loadingController.create({
      message: 'Traitement du paiement...',
    });
    await loading.present();

    const commandeData = {
      id: this.selectedCommande.id,
      total: this.selectedCommande.totalAPayer,
      livraison: this.selectedCommande.livraison,
    };

    this.paiementService.effectuerPaiement(commandeData).subscribe(
      async (response) => {
        await loading.dismiss();
        this.isPaymentProcessing = false;
        this.presentToast('Paiement effectué avec succès', 'success');
        this.router.navigate(['/confirmation']);
      },
      async (error) => {
        console.error('Erreur lors du paiement', error);
        await loading.dismiss();
        this.isPaymentProcessing = false;
        this.presentToast(
          'Une erreur est survenue lors du traitement du paiement',
          'danger'
        );
      }
    );
  }

  getPaymentImage(modeId: string): string {
    switch (modeId) {
      case 'paypal':
        return 'assets/pp.webp';
      case 'orange_money':
        return 'assets/om.webp';
      case 'mastercard':
        return 'assets/mastercard.webp';
      default:
        return 'assets/default.png';
    }
  }

  getSelectedModeName(): string {
    const mode = this.modesPaiement.find(
      (m) => m.id === this.paiementForm.value.modePaiement
    );
    return mode ? mode.name : '';
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'top',
    });
    toast.present();
  }
}
