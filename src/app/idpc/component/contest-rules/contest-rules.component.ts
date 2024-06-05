import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContestRulesList } from 'src/config/contest-rules';
import { IDPCTabConfigList } from 'src/config/idpc-tab-config';

@Component({
  selector: 'app-contest-rules',
  templateUrl: './contest-rules.component.html',
  styleUrls: ['./contest-rules.component.scss']
})
export class ContestRulesComponent implements OnInit {
  selectedIndex:number = 1;
  idpcTabconfig = IDPCTabConfigList;
  contestRulesList = ContestRulesList;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onTabClick(e:any){
    this.selectedIndex = e.index;
    let url = this.idpcTabconfig[this.selectedIndex].Url;
    this.router.navigateByUrl('/'+url);
  }

}
