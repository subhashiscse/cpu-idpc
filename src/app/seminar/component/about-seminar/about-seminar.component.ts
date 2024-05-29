import { Component, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ['Position', 'EventName', 'StartTime', 'EndTime'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
