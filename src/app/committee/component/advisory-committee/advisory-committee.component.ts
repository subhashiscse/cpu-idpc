import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvisoryCommitteeMemberList } from 'src/config/advisory-committee-member';
import { TabConfigList } from 'src/config/tab-config';

@Component({
  selector: 'app-advisory-committee',
  templateUrl: './advisory-committee.component.html',
  styleUrls: ['./advisory-committee.component.scss']
})
export class AdvisoryCommitteeComponent implements OnInit {
  advisoryCommitteeList: any= AdvisoryCommitteeMemberList;
  minFlex :number = 20;
  selectedIndex:number =0;
  tabconfig = TabConfigList
  constructor(private router: Router) { }

  ngOnInit(): void {
      if(this.advisoryCommitteeList.length<4){
        this.minFlex = 100/this.advisoryCommitteeList.length;
      }
  }
  onTabClick(e:any){
    this.selectedIndex = e.index;
    let url = this.tabconfig[this.selectedIndex].Url;
    this.router.navigateByUrl('/'+url);
  }
}
