import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.scss']
})
export class AppDialogComponent implements OnInit {
  aboutData: string = '';
  constructor(private dataService : DataService) { }
  ngOnInit(): void {
    this.aboutData = this.dataService.getAboutData();
  }

}
