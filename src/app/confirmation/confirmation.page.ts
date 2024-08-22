import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ConfirmationPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }
}
