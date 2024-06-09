import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { IDPCTabConfigList } from 'src/config/tab-config';
import { ExcelService } from 'src/shared/excel.service';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-registered-team-list',
  templateUrl: './registered-team-list.component.html',
  styleUrls: ['./registered-team-list.component.scss']
})
export class RegisteredTeamListComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = [];
  teamListDetailsData:any = [];
  dataSource:any = [];
  tableDataSource:any = [];
  excelData: any[] = [];
  idpcTabconfig = IDPCTabConfigList;
  selectedIndex:number = 3;
  isLoading: boolean = true;
  totalTeamList = 0;
  excelUrl: string = 'https://docs.google.com/spreadsheets/d/12zWolSx1nM0o7KLO_khBWmDCHxU9Y0VRDH0okFbEcOc/edit?usp=sharing';
  searchControl = new FormControl('');
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  currentPageSize: number = 5 ;
  currentPageNo: number = 0 ;
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
        this.filteredDataItems();
        this.totalTeamList = this.dataSource.length;
      });
  }

  ngOnInit(): void {
    this.excelService.fetchExcelFile(this.excelUrl).subscribe(
      data => {
        this.excelData = this.excelService.readExcelFile(data,0);
        this.generateDisplayedColumns();
        this.generateDisplayedData(2);
        this.dataSource = this.teamListDetailsData;
        this.filteredDataItems();
        this.totalTeamList = this.dataSource.length;
        this.dataSource.paginator = this.paginator
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
  filteredDataItems(){
    let currentDataList:any = [];
    let startIndex = this.currentPageSize*(this.currentPageNo);
    let endIndex = this.currentPageSize*(this.currentPageNo+1);
    for(let i = startIndex; i < this.dataSource.length && i<endIndex; i++) {
      console.log(this.dataSource[i]);
      currentDataList.push(this.dataSource[i]);
    }
    this.tableDataSource = currentDataList;
  }
  getTeamList(e:any){
    this.currentPageNo = e.pageIndex;
    this.currentPageSize= e.pageSize;
    this.filteredDataItems();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
