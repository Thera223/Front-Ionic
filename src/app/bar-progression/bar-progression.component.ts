import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProgressionService } from '../Services/progression.service';


@Component({
  selector: 'app-bar-progression',
  templateUrl: './bar-progression.component.html',
  styleUrls: ['./bar-progression.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class BarProgressionComponent  implements OnInit {
  currentStep: number = 0;

  constructor(private bar: ProgressionService) {
    this.bar.currentStep$.subscribe(step => {
      this.currentStep = step;
    });
  }

  ngOnInit() {}
  
  getProgressValue(step: number): number {
    if (this.currentStep > step) {
      return 1;
    } else if (this.currentStep === step) {
      return 0.5; // Adjust as needed
    } else {
      return 0;
    }
  }
}

