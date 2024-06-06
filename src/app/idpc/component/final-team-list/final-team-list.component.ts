import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IDPCTabConfigList } from 'src/config/tab-config';
import { ExcelService } from 'src/shared/excel.service';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-final-team-list',
  templateUrl: './final-team-list.component.html',
  styleUrls: ['./final-team-list.component.scss']
})
export class FinalTeamListComponent implements OnInit {
  displayedColumns: string[] = [];
  teamListDetailsData:any = [];
  dataSource:any = []
  excelData: any[] = [];
  idpcTabconfig = IDPCTabConfigList;
  selectedIndex:number = 4;
  isLoading: boolean = true;
  searchText: string = "";
  excelUrl: string = 'https://docs.google.com/spreadsheets/d/12zWolSx1nM0o7KLO_khBWmDCHxU9Y0VRDH0okFbEcOc/edit?usp=sharing';
  searchControl = new FormControl('');
  constructor(
    private router: Router,
    private excelService: ExcelService) {
      this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        this.dataSource = this.filterByTeamName(this.teamListDetailsData, searchTerm);
      });
  }

  ngOnInit(): void {
    this.excelService.fetchExcelFile(this.excelUrl).subscribe(
      data => {
        this.excelData = this.excelService.readExcelFile(data,0);
        this.generateDisplayedColumns();
        this.generateDisplayedData(2);
        this.dataSource = this.teamListDetailsData;
        this.isLoading = false
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
  filterByTeamName(data:any, searchValue:string) {
    return data.filter((team:any) => team.TeamName.toLowerCase().includes(searchValue.toLowerCase()));
  }
}
