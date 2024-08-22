import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LivraisonService } from '../livraison.service';
import { IonicModule } from '@ionic/angular'; // Importation de l'ensemble des composants Ionic via IonicModule

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
  standalone: true,
  imports: [
    IonicModule, // Remplace l'importation de composants individuels par l'import de tout le module Ionic
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
})
export class LivraisonPage implements OnInit {
  livraisonForm: FormGroup;
  typesLivraison: any[] = [];
  commandes: any[] = []; // Liste des commandes disponibles

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private livraisonservice: LivraisonService
  ) {
    this.livraisonForm = this.fb.group({
      commandeId: ['', Validators.required], // Sélection de la commande
      address: ['', Validators.required],
      deliveryType: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadTypesLivraison();
    this.loadCommandesDisponibles();
  }

  loadTypesLivraison() {
    this.livraisonservice.getTypesLivraison().subscribe(
      (data) => {
        this.typesLivraison = data;
      },
      (error) => {
        console.error(
          'Erreur lors du chargement des types de livraison',
          error
        );
      }
    );
  }

  loadCommandesDisponibles() {
    this.livraisonservice.getCommandesDisponibles().subscribe(
      (data) => {
        // Trier les commandes par date de création (la plus récente en premier)
        this.commandes = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Marquer la dernière commande comme "NEW"
        if (this.commandes.length > 0) {
          this.commandes[0].isNew = true;
        }
      },
      (error) => {
        console.error(
          'Erreur lors du chargement des commandes disponibles',
          error
        );
      }
    );
  }

  onSubmit() {
    if (this.livraisonForm.valid) {
      const livraisonData = {
        commandeId: this.livraisonForm.value.commandeId,
        lieuLivraison: this.livraisonForm.value.address,
        typeLivraisonId: this.livraisonForm.value.deliveryType,
      };

      this.livraisonservice
        .ajouterLivraison(livraisonData.commandeId, livraisonData)
        .subscribe(
          (response) => {
            console.log('Livraison ajoutée avec succès', response);
            this.router.navigate(['/paiement']); // Redirection après succès
          },
          (error) => {
            console.error("Erreur lors de l'ajout de la livraison", error);
          }
        );
    } else {
      console.log('Formulaire invalide');
    }
  }
}
