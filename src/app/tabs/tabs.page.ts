import { Component, EnvironmentInjector, inject } from '@angular/core';
<<<<<<< HEAD
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, home, cartOutline, gridOutline } from 'ionicons/icons';

=======
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {cart, grid, person,triangle, ellipse, square, home, cartOutline, gridOutline,  settingsOutline, notificationsOutline, timeOutline, lockClosedOutline, logOutOutline, addOutline, removeOutline, closeOutline, chevronDownCircleOutline, chevronBackOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
>>>>>>> 578e8dc (code)
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
=======
  imports: [
    RouterModule,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonTabs,
  ],
>>>>>>> 578e8dc (code)
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
<<<<<<< HEAD
    addIcons({ triangle, ellipse, square, home, cartOutline, gridOutline});
=======
    addIcons({ grid,cart, person,triangle, ellipse,chevronBackOutline, square, home, settingsOutline, notificationsOutline, timeOutline, lockClosedOutline, logOutOutline, cartOutline,chevronDownCircleOutline, gridOutline,removeOutline, addOutline,closeOutline});
>>>>>>> 578e8dc (code)
  }
}
