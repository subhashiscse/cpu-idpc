import { Component, OnInit } from '@angular/core';
import { GalleryImageList } from 'src/config/gallery-image';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})
export class GalleryViewComponent implements OnInit {
  galleryImageList: any= GalleryImageList;
  constructor() { }

  ngOnInit(): void {
  }

}
