import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressionService } from '../Services/progression.service';
import { BarProgressionComponent } from '../bar-progression/bar-progression.component';
import { Router } from '@angular/router';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.page.html',
  styleUrls: ['./mode.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, BarProgressionComponent]
})
export class ModePage implements OnInit {

  images: string[] = ['assets/images/OrangeMoney.png', 'assets/images/MoovAfrica.png', 'assets/images/visa.png']; // Update with your image paths
  selectedIndex: number = 0;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private progression:ProgressionService,
    private router:Router
  ) { }

  ngOnInit() {
    this.progression.setCurrentStep(1);
  }
  slideChanged() {
    // Implement logic if needed when slide changes
  }
  selectImage(index: number) {
    this.selectedIndex = index;
  }
goTo(){
  this.router.navigate(['/confirmation']);
}
}
