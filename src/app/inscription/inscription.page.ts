import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButtons, IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter, IonModal, IonAvatar, IonList, ModalController, IonProgressBar} from '@ionic/angular/standalone';
import { ConnexionPage } from '../connexion/connexion.page';
import { Client } from '../Interface/client';
import { InscriptionService } from '../Services/inscription.service';
import { Router } from '@angular/router';  // Importation du Router


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter, IonModal, IonAvatar, IonList, FormsModule, ReactiveFormsModule, JsonPipe, NgIf, IonProgressBar]
})
export class InscriptionPage  {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private InscriptionService: InscriptionService,  private modalCtrl: ModalController, private router: Router) {
    this.clientForm = this.fb.group({
      nom: [''],
      prenom: [''],
      adresse: ['',],
      telephone: [''],
      email: [''],
      username: [''],
      motDePasse: ['']
    });
  }

  // ngOnInit() {

  // }

  onSubmit() {
    if (this.clientForm.valid) {
      const newClient = this.clientForm.value;
      this.InscriptionService.creercompte(newClient).subscribe(response => {
        console.log('Client créé avec succès', response);
        this.clientForm.reset(); // Réinitialiser le formulaire après soumission
       // Rediriger vers la page d'accueil après inscription réussie
       this.router.navigateByUrl('creation-recu').then(() => {
        this.cancel(); // Fermer la page de connexion si elle est affichée en modal
      });
    });

    
    } else {
      console.log('Formulaire invalide');
    }
  }


 

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss('confirm');
  }
  

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ConnexionPage,
      
     
    });

    

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
  }
  async openModal1() {
    const modal = await this.modalCtrl.create({
   
      component:InscriptionPage,
     
    });

    

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
  }

 
}
