import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ProgressionService } from '../Services/progression.service';
import { BarProgressionComponent } from '../bar-progression/bar-progression.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule, BarProgressionComponent]
})
export class ConfirmationPage implements OnInit {
  currentStep: number = 0;

  constructor(private navCtrl: NavController,private progression:ProgressionService) { }
  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }
  ngOnInit() {
    this.progression.setCurrentStep(2);
  }

}
