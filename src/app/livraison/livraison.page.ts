import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LivraisonService } from '../Services/livraison.service';


@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LivraisonPage implements OnInit {
  livraisonForm: FormGroup;
  typesLivraison: any[] = [];
  commandeId: number | null = null;
  commande: any;

  constructor(private router: Router, private fb: FormBuilder, private livraisonservice: LivraisonService) { 
    this.livraisonForm = this.fb.group({
      address: ['', Validators.required],
      deliveryType: ['', Validators.required]
    });
  }
  goTo() {
    this.router.navigate(['/paiement']);
  }

  loadTypesLivraison() {
    this.livraisonservice.getTypesLivraison().subscribe(
      (data) => {
        this.typesLivraison = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des types de livraison', error);
      }
    );
  }

  loadCommandeEnAttente() {
    this.livraisonservice.getCommandeEnAttente().subscribe(
      (data) => {
        console.log('Data received:', data);
        this.commande = data[0];
        this.commandeId = this.commande?.id;
        console.log('la commande est:', this.commande);
        console.log('L/id de la commande est:', this.commande.id);
      },
      (error) => {
        console.error('Error loading commande en attente', error);
      }
    );
  }

  ngOnInit() {
    this.loadTypesLivraison();
    this.loadCommandeEnAttente();
  }

  onSubmit() {
    if (this.livraisonForm.valid && this.commande !== null && this.commande.id !== undefined) {
      const livraisonData = {
        lieuLivraison: this.livraisonForm.value.address,
        typeLivraisonId: this.livraisonForm.value.deliveryType
      };
      this.livraisonservice.ajouterLivraison(this.commande.id, livraisonData).subscribe(
        (response) => {
          console.log('Livraison ajoutée avec succès', response);
          this.router.navigate(['/paiement']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la livraison', error);
        }
      );
    }
  }
}
