import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDPCTabConfigList } from 'src/config/idpc-tab-config';

@Component({
  selector: 'app-registered-team-list',
  templateUrl: './registered-team-list.component.html',
  styleUrls: ['./registered-team-list.component.scss']
})
export class RegisteredTeamListComponent implements OnInit {
  selectedIndex:number = 2;
  idpcTabconfig = IDPCTabConfigList;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTabClick(e:any){
    this.selectedIndex = e.index;
    let url = this.idpcTabconfig[this.selectedIndex].Url;
    this.router.navigateByUrl('/'+url);
  }
}
