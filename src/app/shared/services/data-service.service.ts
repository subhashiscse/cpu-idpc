import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  aboutData: string ='';
  constructor() { }
  getAboutData(){
    return this.aboutData;
  }
  setAboutData(data:string){
    this.aboutData = data;
  }
}
