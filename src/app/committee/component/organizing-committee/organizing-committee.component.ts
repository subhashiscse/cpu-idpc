import { Component, OnInit } from '@angular/core';
import { OrganizingCommitteeMemberList } from 'src/config/organizing-committee-member';

@Component({
  selector: 'app-organizing-committee',
  templateUrl: './organizing-committee.component.html',
  styleUrls: ['./organizing-committee.component.scss']
})
export class OrganizingCommitteeComponent implements OnInit {
  organizingCommitteeList: any= OrganizingCommitteeMemberList;
  constructor() { }

  ngOnInit(): void {
  }

}
