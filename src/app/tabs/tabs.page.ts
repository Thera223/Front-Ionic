import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

import { grid, cart, person,triangle, ellipse, square, home, cartOutline, gridOutline, addOutline, removeOutline, closeOutline, chevronDownCircleOutline, chevronBackOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonTabs,
  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ grid,cart, person,triangle, ellipse,chevronBackOutline, square, home, cartOutline,chevronDownCircleOutline, gridOutline,removeOutline, addOutline,closeOutline});
  }
}
