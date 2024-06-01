import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/shared/excel.service';
import { ActivatedRoute, Router } from '@angular/router';
export interface TimeSchedule {
  EventName: string;
  Position: number;
  StartTime: string;
  EndTime: string;
}

@Component({
  selector: 'app-about-idpc',
  templateUrl: './about-idpc.component.html',
  styleUrls: ['./about-idpc.component.scss']
})
export class AboutIdpcComponent implements OnInit {
  ELEMENT_DATA: TimeSchedule[] = [
    {Position: 1, EventName: 'Registration Start Date', StartTime: "09:00 AM", EndTime: "09:00 PM"},
    {Position: 2, EventName: 'Event Name 2', StartTime: "09:00 AM", EndTime: "09:00 PM"},
    {Position: 3, EventName: 'Event Name 3', StartTime: "09:00 AM", EndTime: "09:00 PM"},
    {Position: 4, EventName: 'Event Name 4', StartTime: "09:00 AM", EndTime: "09:00 PM"},
    {Position: 5, EventName: 'Event Name 5', StartTime: "09:00 AM", EndTime: "09:00 PM"},
    {Position: 6, EventName: 'Event Name 6', StartTime: "09:00 AM", EndTime: "09:00 PM"},
  ];
  displayedColumns: string[] = [];
  eventDetailsData:any = [];
  dataSource:any = []
  excelData: any[] = [];
  excelUrl: string = 'https://docs.google.com/spreadsheets/d/1vtkTMVeys3uBJ-CSF0zvPpErBXd1kO59OD6sf7Bq9ok/edit?usp=sharing'; // Replace with your URL

  constructor(
    private excelService: ExcelService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.excelService.fetchExcelFile(this.excelUrl).subscribe(
      data => {
        this.excelData = this.excelService.readExcelFile(data);
        this.generateDisplayedColumns();
        this.generateDisplayedData(2);
        this.dataSource = this.eventDetailsData;
      },
      error => {
        console.error('Error fetching the Excel file', error);
      }
    );
  }
  generateDisplayedColumns(){
    let data = this.excelData[1];
    data[0]='Position';
    this.displayedColumns = data;
  }
  generateDisplayedData(startingRow:number){
    let count = 1;
    while(startingRow>=0){
      let data = this.excelData[startingRow];
      data[0]=count;
      if(data.length==1){
        break;
      }
      this.displayedColumns.forEach((rowdata,i) => {
        data[rowdata]=data[i];
      });
      data.splice(0,this.displayedColumns.length);
      this.eventDetailsData.push(data);
      count++;
      startingRow++;
    }
  }
  navigateToRegistrationLink(){
    
  }
  navigateToRegisteredTeamList(){
    this.router.navigate(['/registered-team-list']);
  }
  navigateToFinalTeamList(){
    this.router.navigate(['/final-team-list']);
  }
}