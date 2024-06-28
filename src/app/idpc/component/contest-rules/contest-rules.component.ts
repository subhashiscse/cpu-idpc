import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContestRulesList } from 'src/config/contest-rules';
import { IDPCTabConfigList } from 'src/config/tab-config';

@Component({
  selector: 'app-contest-rules',
  templateUrl: './contest-rules.component.html',
  styleUrls: ['./contest-rules.component.scss']
})
export class ContestRulesComponent implements OnInit {
  selectedIndex:number = 1;
  idpcTabconfig = IDPCTabConfigList;
  contestRulesList = ContestRulesList;
  registrationUrl: string = "https://docs.google.com/forms/d/e/1FAIpQLSfIgQhGhm1Op_0bUdUs_3NHw1TPxhUdR-Uwez2_94AOUNeKGQ/viewform";
  constructor(private router: Router) { }

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
