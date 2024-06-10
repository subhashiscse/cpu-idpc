import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/services/data-service.service';
import { GalleryImageList } from 'src/config/gallery-image';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})
export class GalleryViewComponent implements OnInit {
  galleryImageList: any= GalleryImageList;
  constructor(
    public dialog: MatDialog,
    public dataService: DataService) { }

  ngOnInit(): void {
  }
  onZoomButtonClick(url: string): void {
    this.dataService.setImageUrl(url);
    this.dialog.open(ImageViewerComponent);
  }
}
