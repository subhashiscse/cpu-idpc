import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDPCTabConfigList } from 'src/config/idpc-tab-config';

@Component({
  selector: 'app-final-team-list',
  templateUrl: './final-team-list.component.html',
  styleUrls: ['./final-team-list.component.scss']
})
export class FinalTeamListComponent implements OnInit {

  selectedIndex:number = 3;
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
