import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private progression:ProgressionService) { }

  ngOnInit() {
    this.progression.setCurrentStep(2);
  }

}
