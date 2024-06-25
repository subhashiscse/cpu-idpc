import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeminarTabConfigList } from 'src/config/tab-config';
export interface TimeSchedule {
  EventName: string;
  Position: number;
  Topics: string;
  StartTime: string;
  EndTime: string;
  Location: string;
}

const ELEMENT_DATA: TimeSchedule[] = [
  {Position: 1, EventName: 'Seminar 1',Topics:'Career Power Play: Strategies for Professional Success', StartTime: "10:00 AM", EndTime: "11:00 AM",Location:"Seminar Room"},
  {Position: 2, EventName: 'Seminar 2',Topics:'Cybersecurity Basics: Protecting Your Digital Life', StartTime: "11:00 AM", EndTime: "12:00 AM",Location:"Seminar Room"},
  {Position: 3, EventName: 'Seminar 3',Topics:'Introduction to Machine Learning: Concepts and Applications', StartTime: "12:00 AM", EndTime: "13:00 PM",Location:"Seminar Room"},
];
@Component({
  selector: 'app-about-seminar',
  templateUrl: './about-seminar.component.html',
  styleUrls: ['./about-seminar.component.scss']
})
export class AboutSeminarComponent implements OnInit {
  selectedIndex: number = 0;
  displayedColumns: string[] = ['Position', 'EventName','Topics', 'StartTime', 'EndTime','Location'];
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
