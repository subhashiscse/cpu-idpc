import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeminarTabConfigList } from 'src/config/tab-config';
export interface TimeSchedule {
  EventName: string;
  Position: number;
  StartTime: string;
  EndTime: string;
}

const ELEMENT_DATA: TimeSchedule[] = [
  {Position: 1, EventName: 'Registration Start Date', StartTime: "09:00 AM", EndTime: "09:00 PM"},
  {Position: 2, EventName: 'Event Name 2', StartTime: "09:00 AM", EndTime: "09:00 PM"},
  {Position: 3, EventName: 'Event Name 3', StartTime: "09:00 AM", EndTime: "09:00 PM"},
  {Position: 4, EventName: 'Event Name 4', StartTime: "09:00 AM", EndTime: "09:00 PM"},
  {Position: 5, EventName: 'Event Name 5', StartTime: "09:00 AM", EndTime: "09:00 PM"},
  {Position: 6, EventName: 'Event Name 6', StartTime: "09:00 AM", EndTime: "09:00 PM"},
];
@Component({
  selector: 'app-about-seminar',
  templateUrl: './about-seminar.component.html',
  styleUrls: ['./about-seminar.component.scss']
})
export class AboutSeminarComponent implements OnInit {
  selectedIndex: number = 0;
  displayedColumns: string[] = ['Position', 'EventName', 'StartTime', 'EndTime'];
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
