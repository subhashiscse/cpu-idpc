import { Component, OnInit } from '@angular/core';
import { GoverningCommitteeMemberList } from 'src/config/governing-committee-member';

@Component({
  selector: 'app-governing-committee',
  templateUrl: './governing-committee.component.html',
  styleUrls: ['./governing-committee.component.scss']
})
export class GoverningCommitteeComponent implements OnInit {
  governingCommitteeList: any= GoverningCommitteeMemberList;
  constructor() { }

  ngOnInit(): void {
  }

}
