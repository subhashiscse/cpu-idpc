import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeminarSpeakerMemberList } from 'src/config/seminar-member';
import { SeminarTabConfigList } from 'src/config/tab-config';
export interface TimeSchedule {
  Position: number;
  Topics: string;
  StartTime: string;
  EndTime: string;
  Location: string;
  Speaker: string
}

const ELEMENT_DATA: TimeSchedule[] = [
  {Position: 1,Topics:'Navigating Cybersecurity: Current Threats and Future Trends', StartTime: "10:00 AM", EndTime: "11:00 AM",Location:"Seminar Room",Speaker:"Md. Jahangir Alam"},
  {Position: 2,Topics:'Empowering Your Tech Journey: Strategies For Success', StartTime: "11:00 AM", EndTime: "12:00 AM",Location:"Seminar Room",Speaker:"Md. Shirajul Islam Mamun"},
  {Position: 3,Topics:'QnA Session', StartTime: "12:00 AM", EndTime: "12:30 PM",Location:"Seminar Room",Speaker:"Both"},
];
@Component({
  selector: 'app-seminar-schedule',
  templateUrl: './seminar-schedule.component.html',
  styleUrls: ['./seminar-schedule.component.scss']
})
export class SeminarScheduleComponent implements OnInit {

  selectedIndex: number = 1;
  displayedColumns: string[] = ['Position','Topics','Speaker', 'StartTime', 'EndTime','Location'];
  dataSource = ELEMENT_DATA;
  isLoading: boolean = false;
  tabconfig = SeminarTabConfigList
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onTabClick(e:any){
    this.selectedIndex = e.index;
    let url = this.tabconfig[this.selectedIndex].Url;
    this.router.navigateByUrl('/'+url);
  }

}
