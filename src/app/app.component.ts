import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SponsorList } from 'src/config/sponsor-list';
import { NavigationMenuList } from '.././config/navigation-menu';
import { AppDialogComponent } from './dialog-modal/app-dialog/app-dialog.component';
import { SlideInterface } from './image-slider/types/slider.interface';
import { DataService } from './shared/services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slides: SlideInterface[] = [
    { url: './assets/images/slider-0.jpg', title: 'beach' },
    { url: './assets/images/slider-00.jpg', title: 'beach' },
    { url: './assets/images/slider-1.jpg', title: 'beach' },
    { url: './assets/images/slider-2.jpg', title: 'forest' },
    { url: './assets/images/slider-4.jpg', title: 'city' },
    { url: './assets/images/slider-5.jpg', title: 'city' },
    { url: './assets/images/slider-6.jpg', title: 'city' }
  ];
  titleSponsorList: any = SponsorList.TitleSponsor;
  platinumSponsorList: any = SponsorList.PlainumSponsor;
  goldSponsorList: any = SponsorList.GoldSponsor;
  navigationList :any = NavigationMenuList;
  topScoll: number = 0;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private dataService:DataService) {
  }
  scrollToTop(navmenu:any): void {
    this.topScoll = navmenu.Top;
    window.scrollTo({ top: this.topScoll, behavior: 'smooth' });
    this.router.navigate([navmenu.Url]);
  }
  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
  openDialog(type:number, index:number): void {
    let aboutData:string ='';
    if(type == 1){
      aboutData = this.titleSponsorList[index].About;
    } else if(type == 2){
      aboutData = this.platinumSponsorList[index].About;
    } else if(type == 3){
      aboutData = this.goldSponsorList[index].About;
    }
    console.log(aboutData);
    this.dataService.setAboutData(aboutData);
    this.dialog.open(AppDialogComponent);
  }
}
