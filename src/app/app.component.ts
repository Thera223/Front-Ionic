import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
<<<<<<< HEAD
=======
import { register } from 'swiper/element/bundle';
register();
>>>>>>> 578e8dc (code)

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
<<<<<<< HEAD
  imports: [IonApp, IonRouterOutlet],
=======
  imports: [IonApp,IonRouterOutlet],
>>>>>>> 578e8dc (code)
})
export class AppComponent {
  constructor() {}
}
