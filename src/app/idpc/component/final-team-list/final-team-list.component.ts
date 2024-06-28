import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IDPCTabConfigList } from 'src/config/tab-config';
import { ExcelService } from 'src/shared/excel.service';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-final-team-list',
  templateUrl: './final-team-list.component.html',
  styleUrls: ['./final-team-list.component.scss']
})
export class FinalTeamListComponent implements OnInit {
  displayedColumns: string[] = [];
  temporaryDisplayedColumns: string[] = [
    "Position",
    "TeamName",
    "NameContestant1",
    "DepartmentContestant1",
    "NameContestant2",
    "DepartmentContestant2",
    "PaymentStatus"
  ]
  teamListDetailsData:any = [];
  dataSource:any = [];
  tableDataSource:any = [];
  excelData: any[] = [];
  idpcTabconfig = IDPCTabConfigList;
  selectedIndex:number = 4;
  isLoading: boolean = true;
  searchText: string = "";
  registrationUrl: string = "https://docs.google.com/forms/d/e/1FAIpQLSfIgQhGhm1Op_0bUdUs_3NHw1TPxhUdR-Uwez2_94AOUNeKGQ/viewform";
  excelUrl: string = 'https://docs.google.com/spreadsheets/d/1s-DejkiLKO05kEmtFkH46UkX6DnjUmX0IM70b-oYTAU/edit?resourcekey#gid=370113001';
  searchControl = new FormControl('');
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  currentPageSize: number = 5 ;
  currentPageNo: number = 0 ;
  totalTeamList = 0;
  tableDataConfigPositionList:any = [1,2,3,4,9,10,18];
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
      });
  }

  ngOnInit(): void {
    this.excelService.fetchExcelFile(this.excelUrl).subscribe(
      data => {
        this.excelData = this.excelService.readExcelFile(data,0);
        this.generateDisplayedColumns();
        this.generateDisplayedData(3);
        this.dataSource = this.teamListDetailsData;
        this.filteredDataItems();
        this.totalTeamList = this.dataSource.length;
        this.dataSource.paginator = this.paginator
        this.isLoading = false
      },
      error => {
        console.error('Error fetching the Excel file', error);
      }
    );
  }
  generateDisplayedColumns(){
    // let data = this.excelData[1];
    // data[0]='Position';
    // this.displayedColumns = data;
    this.displayedColumns = this.temporaryDisplayedColumns;
    
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
          data[rowdata]=data[this.tableDataConfigPositionList[i]];
      });
      if(data.PaymentStatus === "Done") {
        data.splice(0,this.displayedColumns.length);
        this.teamListDetailsData.push(data);
      }
      count++;
      startingRow++;
    }
    this.displayedColumns = this.temporaryDisplayedColumns;
    this.displayedColumns.splice(this.displayedColumns.length-1,1);
    this.teamListDetailsData = this.arrSort(this.teamListDetailsData);
  }
  arrSort(arr:any) {
      arr.sort((a:any,b:any)=>a-b);
      arr.reverse();
      return arr;
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
  redirectToRegistrationLink(){
    window.open(this.registrationUrl);
  }
}
