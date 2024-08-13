import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule, ReactiveFormsModule]
})
export class LivraisonPage implements OnInit {
  livraisonForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { 
    this.livraisonForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      deliveryType: ['', Validators.required]
    });
  }
  goTo() {
    this.router.navigate(['/paiement']);
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.livraisonForm.valid) {
      console.log('Form Submitted', this.livraisonForm.value);
      // Navigation logic here
    }
  }
}
