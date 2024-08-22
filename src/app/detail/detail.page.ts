
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NumberValueAccessor } from '@angular/forms';
import {IonContent,IonButton, IonHeader, IonIcon, IonRouterLink, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {DetailserviceService} from "../Services/detailservice.service";
import {Produit} from "../Interface/Produit";
import { ProduitService } from '../Services/produit.service';
import {ActivatedRoute, ParamMap, Router, RouterLinkActive} from "@angular/router";
import {addIcons} from "ionicons";
import {caretBackOutline} from "ionicons/icons";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonContent,IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonRouterLink, RouterLinkActive]
})
export class DetailPage implements OnInit {  
  produit: Produit | undefined;
  constructor( 
  private produitService: ProduitService,
  private router: Router,
  private detailService: DetailserviceService,
  private route: ActivatedRoute) {addIcons({caretBackOutline,})}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id')!; // Récupérer l'ID et le parser en nombre
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
      }
    });
  }
  
   ajoutePanier():void{
    if (this.produit) {
      this.produitService.addPanier(2, this.produit.id, 1).then(() => {
        console.log("Produit ajouté au panier avec succès");
        this.goToPanier();
      }).catch((error) => {
        console.log("Erreur de l'ajout du produit au panier", error);
      });
    }
   }
  goToPanier() {
    this.router.navigate(['/panier']);
  }
  retourTab1() {
    this.router.navigate(['/']);
  }

}
