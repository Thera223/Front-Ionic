import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayementService } from '../Services/payement.service';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
  standalone: true, // Ajouté pour utiliser le mode standalone
  imports: [IonicModule, ReactiveFormsModule, FormsModule, CommonModule],
})
export class PaiementPage implements OnInit {
  paiementForm: FormGroup;
  commandes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private paiementService: PayementService,
    private router: Router
  ) {
    this.paiementForm = this.fb.group({
      commandeId: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadCommandes();
  }

  loadCommandes() {
    this.paiementService.getCommandes().subscribe(
      (data) => {
        this.commandes = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des commandes', error);
      }
    );
  }

  effectuerPaiement() {
    if (this.paiementForm.valid) {
      const commandeData = { id: this.paiementForm.value.commandeId };
      this.paiementService.effectuerPaiement(commandeData).subscribe(
        (response) => {
          console.log('Paiement réussi', response);
          this.router.navigate(['/confirmation']); // Redirection après succès
        },
        (error) => {
          console.error('Erreur lors du paiement', error);
        }
      );
    }
  }
}
