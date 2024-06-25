import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeminarSpeakerMemberList } from 'src/config/seminar-member';
import { SeminarTabConfigList } from 'src/config/tab-config';

@Component({
  selector: 'app-seminar-speaker',
  templateUrl: './seminar-speaker.component.html',
  styleUrls: ['./seminar-speaker.component.scss']
})
export class SeminarSpeakerComponent implements OnInit {

  selectedIndex: number =  2;
  tabconfig = SeminarTabConfigList;
  minFlex :number = 23;
  seminarSpeakerList: any= SeminarSpeakerMemberList;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onTabClick(e:any){
    this.selectedIndex = e.index;
    let url = this.tabconfig[this.selectedIndex].Url;
    this.router.navigateByUrl('/'+url);
  }

}
