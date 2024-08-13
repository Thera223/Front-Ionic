import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonRouterLink, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {DetailserviceService} from "../Services/detailservice.service";
import {Produit} from "../Interface/Produit";
import {Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonRouterLink, RouterLinkActive]
})
export class DetailPage implements OnInit {

  Detailprod!:Produit[];

  constructor(private detailservice: DetailserviceService,
              private router:Router) { }

  ngOnInit() {

    this.detailservice.Detailproduit().subscribe(data =>{
      this.Detailprod=data;
    })
  }

  retourTab1() {
    this.router.navigate(['/']);

  }

}
