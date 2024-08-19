import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
<<<<<<< HEAD
=======
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PanierPage } from "../panier/panier.page";

>>>>>>> 578e8dc (code)

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
=======
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, PanierPage],
>>>>>>> 578e8dc (code)
})
export class Tab3Page {
  constructor() {}
}
<<<<<<< HEAD
=======


>>>>>>> 578e8dc (code)
