import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonHeader,
  IonIcon,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
// import { DetailserviceService } from '../Services/detailservice.service';
import { Produit } from '../Interface/Produit';
import { ProduitService } from '../Services/produit.service';
import { PanierserviceService } from '../Services/panierservice.service';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  RouterLinkActive,
} from '@angular/router';
import { addIcons } from 'ionicons';
import { caretBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonRouterLink,
    RouterLinkActive,
  ],
})
export class DetailPage implements OnInit {
  produit: Produit | undefined;
  clientId: number = 2;

  constructor(
    private produitService: ProduitService,
    private panierService: PanierserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    addIcons({ caretBackOutline });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id')!;
      this.getProduitDetail(id);
    });
  }

  getProduitDetail(id: number): void {
    this.produitService.getProduitById(id).subscribe({
      next: (detail: Produit) => {
        this.produit = detail;
        console.log(this.produit);
      },
      error: (err) => {
        console.error('Erreur de chargement du produit', err);
      },
    });
  }

  ajouterAuPanier() {
    if (this.produit) {
      this.panierService
        .ajouterProduitAuPanier(this.clientId, this.produit.id, 1)
        .subscribe(
          () => {
            console.log('Produit ajouté au panier avec succès');
            this.redirectToPanier(); // Redirigez vers le panier après ajout
          },
          (error) => {
            console.error("Erreur lors de l'ajout au panier", error);
          }
        );
    }
  }

  redirectToPanier() {
    const currentUrl = this.router.url;
    if (currentUrl !== '/panier') {
      this.router.navigateByUrl('/panier'); // Utilisez navigateByUrl pour forcer la navigation
    }
  }

  retourTab1() {
    this.router.navigate(['/']);
  }
}
