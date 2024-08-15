import { CUSTOM_ELEMENTS_SCHEMA,Component, Input, OnInit, ElementRef,  ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonSearchbar,IonCard,IonCol,IonRow,IonGrid,
  IonCardHeader,IonCardContent,IonLabel,IonIcon,IonItem,IonListHeader} from '@ionic/angular/standalone';
import {IonicSlides} from '@ionic/angular';





@Component({
  selector: 'app-cover',
  templateUrl: './cover.page.html',
  styleUrls: ['./cover.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonCol,IonRow,IonGrid
    ,IonSearchbar,IonCard,IonCardHeader,IonCardContent,IonLabel,IonIcon,IonItem,IonListHeader,CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoverPage implements OnInit {
  onSlideChange(event: any) {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
    console.log('event', event);
  }



  @Input() slides: any[]=[];
  SwiperModules = (IonicSlides)
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  constructor(private router: Router) { }
  goToNextPage() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.slides=[
      {banner:'assets/imgmirashop/home1.png'},
      {banner:'assets/imgmirashop/home2.png'},
      {banner:'assets/imgmirashop/home3.png'},
    ]

  }

}

