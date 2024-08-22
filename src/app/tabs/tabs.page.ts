import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {cart, grid, person,triangle, ellipse, square, home, cartOutline, gridOutline,  settingsOutline, notificationsOutline, timeOutline, lockClosedOutline, logOutOutline, addOutline, removeOutline, closeOutline, chevronDownCircleOutline, chevronBackOutline, star } from 'ionicons/icons';
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
    addIcons({ grid,cart,star, person,triangle, ellipse,chevronBackOutline, square, home, settingsOutline, notificationsOutline, timeOutline, lockClosedOutline, logOutOutline, cartOutline,chevronDownCircleOutline, gridOutline,removeOutline, addOutline,closeOutline});
  }
}
