import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { SouscateserviceService } from '../Services/souscateservice.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow, IonButton, IonButtons, IonIcon]
})
export class CategoriePage implements OnInit {
  listFile: any[] = [];
  sousCategories: any[] = [];
  listile: any[] = [];
  selectedButton: number | null = 0;

  constructor(private router: Router, private souscateService: SouscateserviceService) {
    addIcons({ arrowBack});
  }

  ngOnInit() {
    this.souscateService.listFiles().subscribe((files)=>this.listFile = files);
    this.souscateService.getSousCategories().subscribe((data) => {this.sousCategories = data; console.log(data);
    });     
    this.souscateService.getProduitBySousCategorieUrl(1).subscribe((p) => console.log(p));
  }

  changeColor(index: number) {
    if (this.selectedButton === index) {
      this.selectedButton = null;
    } else {
      this.selectedButton = index;
    }
  }

  navigate(index:any) {
    this.router.navigateByUrl("detail/"+index);
    console.log(index);
  }

}
