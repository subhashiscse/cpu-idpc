import { Component } from '@angular/core';
import { SponsorList } from 'src/config/sponsor-list';
import { NavigationMenuList } from '.././config/navigation-menu';
import { SlideInterface } from './image-slider/types/slider.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slides: SlideInterface[] = [
    { url: './assets/images/slider-1.jpg', title: 'beach' },
    { url: './assets/images/slider-2.jpg', title: 'boat' },
    { url: './assets/images/slider-3.jpg', title: 'forest' },
    { url: './assets/images/slider-4.jpg', title: 'city' },
    { url: './assets/images/slider-5.jpg', title: 'city' },
    { url: './assets/images/slider-6.jpg', title: 'city' }
  ];
  titleSponsorList: any = SponsorList.TitleSponsor;
  platinumSponsorList: any = SponsorList.PlainumSponsor;
  goldSponsorList: any = SponsorList.GoldSponsor;
  navigationList :any = NavigationMenuList;
}
