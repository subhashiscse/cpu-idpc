import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoverningCommitteeMemberList } from 'src/config/governing-committee-member';
import { TabConfigList } from 'src/config/tab-config';

@Component({
  selector: 'app-governing-committee',
  templateUrl: './governing-committee.component.html',
  styleUrls: ['./governing-committee.component.scss']
})
export class GoverningCommitteeComponent implements OnInit {
  selectedIndex:number =1;
  governingCommitteeList: any= GoverningCommitteeMemberList;
  tabconfig = TabConfigList;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTabClick(e:any){
    this.selectedIndex = e.index;
    let url = this.tabconfig[this.selectedIndex].Url;
    this.router.navigateByUrl('/'+url);
  }

}
