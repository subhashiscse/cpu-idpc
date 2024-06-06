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
}