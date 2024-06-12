import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDPCTabConfigList } from 'src/config/tab-config';

@Component({
  selector: 'app-about-idpc',
  templateUrl: './about-idpc.component.html',
  styleUrls: ['./about-idpc.component.scss']
})
export class AboutIdpcComponent implements OnInit {
  selectedIndex:number = 0;
  idpcTabconfig = IDPCTabConfigList;
  registrationUrl: string = "https://docs.google.com/forms/d/e/1FAIpQLSfIgQhGhm1Op_0bUdUs_3NHw1TPxhUdR-Uwez2_94AOUNeKGQ/viewform";

  constructor(
    private router: Router) {

  }

  ngOnInit(): void {
  }
  onTabClick(e:any){
    this.selectedIndex = e.index;
    let url = this.idpcTabconfig[this.selectedIndex].Url;
    this.router.navigateByUrl('/'+url);
  }
  redirectToRegistrationLink(){
    window.open(this.registrationUrl);
  }
}