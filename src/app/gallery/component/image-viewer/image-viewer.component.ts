import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  currentImageUrl: string ='';
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.currentImageUrl = this.dataService.getImageUrl()
  }

}
