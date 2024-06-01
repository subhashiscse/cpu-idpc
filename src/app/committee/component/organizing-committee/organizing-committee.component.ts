import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizingCommitteeMemberList } from 'src/config/organizing-committee-member';
import { TabConfigList } from 'src/config/tab-config';

@Component({
  selector: 'app-organizing-committee',
  templateUrl: './organizing-committee.component.html',
  styleUrls: ['./organizing-committee.component.scss']
})
export class OrganizingCommitteeComponent implements OnInit {
  organizingCommitteeList: any= OrganizingCommitteeMemberList;
  selectedIndex:number =2;
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
