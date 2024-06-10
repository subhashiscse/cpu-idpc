import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  aboutData: string ='';
  currentImageUrl: string ='';
  constructor() { }
  getAboutData(){
    return this.aboutData;
  }
  setAboutData(data:string){
    this.aboutData = data;
  }
  setImageUrl(url:string){
    this.currentImageUrl = url;
  }
  getImageUrl(){
    return this.currentImageUrl;
  }
}
