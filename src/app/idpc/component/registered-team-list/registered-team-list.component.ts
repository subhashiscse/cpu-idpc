import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDPCTabConfigList } from 'src/config/idpc-tab-config';
import { ExcelService } from 'src/shared/excel.service';

@Component({
  selector: 'app-registered-team-list',
  templateUrl: './registered-team-list.component.html',
  styleUrls: ['./registered-team-list.component.scss']
})
export class RegisteredTeamListComponent implements OnInit {
  displayedColumns: string[] = [];
  teamListDetailsData:any = [];
  dataSource:any = []
  excelData: any[] = [];
  idpcTabconfig = IDPCTabConfigList;
  selectedIndex:number = 2;
  excelUrl: string = 'https://docs.google.com/spreadsheets/d/12zWolSx1nM0o7KLO_khBWmDCHxU9Y0VRDH0okFbEcOc/edit?usp=sharing';
  constructor(
    private router: Router,
    private excelService: ExcelService) { 
  }

  ngOnInit(): void {
    this.excelService.fetchExcelFile(this.excelUrl).subscribe(
      data => {
        debugger;
        this.excelData = this.excelService.readExcelFile(data,0);
        this.generateDisplayedColumns();
        this.generateDisplayedData(2);
        this.dataSource = this.teamListDetailsData;
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
      this.teamListDetailsData.push(data);
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
