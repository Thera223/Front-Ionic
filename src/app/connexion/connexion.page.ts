import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons, IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter, IonModal, IonAvatar, IonList, ModalController } from '@ionic/angular/standalone';
import { InscriptionPage } from '../inscription/inscription.page';
import { Router } from '@angular/router';
import { ConnexionService } from '../Services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,CommonModule, FormsModule,IonItem, IonLabel, IonInput, IonIcon,IonImg,IonGrid, IonCol,IonRow, IonButton, IonFooter, IonModal, IonAvatar, IonList, FormsModule, ReactiveFormsModule, JsonPipe, NgIf]
})
export class ConnexionPage implements OnInit {
  public  loginForm!: FormGroup;
  authToken: string | null = '';
  currentUser: any;
  isLoginFailed=false;
  @Output() loginEvent = new EventEmitter<boolean>();
  errorMessage: any;


  constructor(private modalCtrl: ModalController, private fb: FormBuilder, private router: Router, private connexionService: ConnexionService) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    })
    let auth = localStorage.getItem("authToken");
    if ( auth != null) {
      this.router.navigateByUrl('tabs/home');     
    }
  }
  login(username: any, password: any): void {
    this.connexionService.login(username, password).subscribe({
      next: (res) => {
        this.authToken = this.connexionService.token;
        localStorage.setItem('authToken', JSON.stringify(this.authToken));
        
        this.loginEvent.emit(true);
        // Redirection vers la page d'accueil et fermeture du modal
        this.router.navigateByUrl('tabs/home').then(() => {
          this.cancel(); // Fermer la page de connexion si elle est affichée en modal
        });
        console.log(res);
        this.currentUser = localStorage.setItem("currentUser", JSON.stringify(res));
        //this.currentUser = localStorage.setItem("currentUser", JSON.stringify(res.data));
      },
      error: (error) => {
        this.isLoginFailed = true;
        this.errorMessage = error.message || 'Login failed. Please try again.';
        this.loginForm.patchValue({ password: '' }); // Vider le champ password seulement
       
      }
    });
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

    await modal.present();
  }

  async openModal1() {
    const modal = await this.modalCtrl.create({
      component: InscriptionPage,
    });

    await modal.present();
  }
}