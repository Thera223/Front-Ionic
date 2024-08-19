import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PayementService } from '../Services/payement.service';
import { ProgressionService } from '../Services/progression.service';
import { BarProgressionComponent } from '../bar-progression/bar-progression.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,BarProgressionComponent]
})
export class PaiementPage implements OnInit {
  products: any[] = [];
  deliveryFee = 24.75;
  subtotal = 0;
  total = 0;

  constructor(private payement: PayementService,
     private progression:ProgressionService,
     private router:Router) { }

  ngOnInit() {
    this.products = this.payement.getProducts();
    this.progression.setCurrentStep(0);
    this.calculateTotals();
  }
  calculateTotals() {
    this.subtotal = this.products.reduce((acc, product) => acc + product.price, 0);
    this.total = this.subtotal + this.deliveryFee;
  }
 GoTo(){
  this.router.navigate(['/mode']);
 }
  
}
