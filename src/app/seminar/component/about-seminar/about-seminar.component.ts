import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeminarTabConfigList } from 'src/config/tab-config';
@Component({
  selector: 'app-about-seminar',
  templateUrl: './about-seminar.component.html',
  styleUrls: ['./about-seminar.component.scss']
})
export class AboutSeminarComponent implements OnInit {
  selectedIndex: number = 0;
  tabconfig = SeminarTabConfigList
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onTabClick(e:any){
    this.selectedIndex = e.index;
    let url = this.tabconfig[this.selectedIndex].Url;
    this.router.navigateByUrl('/'+url);
  }

}
