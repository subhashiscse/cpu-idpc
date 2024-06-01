import { Component, OnInit } from '@angular/core';
import { AdvisoryCommitteeMemberList } from 'src/config/advisory-committee-member';

@Component({
  selector: 'app-advisory-committee',
  templateUrl: './advisory-committee.component.html',
  styleUrls: ['./advisory-committee.component.scss']
})
export class AdvisoryCommitteeComponent implements OnInit {
  advisoryCommitteeList: any= AdvisoryCommitteeMemberList;
  constructor() { }

  ngOnInit(): void {
  }

}
