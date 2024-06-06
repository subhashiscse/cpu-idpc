import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDPCTabConfigList } from 'src/config/tab-config';
import { ExcelService } from 'src/shared/excel.service';

@Component({
  selector: 'app-idpc-schedule',
  templateUrl: './idpc-schedule.component.html',
  styleUrls: ['./idpc-schedule.component.scss']
})
export class IdpcScheduleComponent implements OnInit {
  displayedColumns: string[] = [];
  eventDetailsData:any = [];
  dataSource:any = []
  excelData: any[] = [];
  selectedIndex:number = 2;
  idpcTabconfig = IDPCTabConfigList;
  isLoading: boolean = true;
  excelUrl: string = 'https://docs.google.com/spreadsheets/d/1vtkTMVeys3uBJ-CSF0zvPpErBXd1kO59OD6sf7Bq9ok/edit?usp=sharing'; // Replace with your URL

  constructor(
    private excelService: ExcelService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.excelService.fetchExcelFile(this.excelUrl).subscribe(
      data => {
        this.excelData = this.excelService.readExcelFile(data,0);
        this.generateDisplayedColumns();
        this.generateDisplayedData(2);
        this.dataSource = this.eventDetailsData;
        this.isLoading = false;
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

  onTabClick(e:any){
    this.selectedIndex = e.index;
    let url = this.idpcTabconfig[this.selectedIndex].Url;
    this.router.navigateByUrl('/'+url);
  }
}
