import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryViewComponent } from '../component/gallery-view/gallery-view.component';
import { MatIconModule } from '@angular/material/icon';
import { ImageViewerComponent } from '../component/image-viewer/image-viewer.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [GalleryViewComponent,ImageViewerComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class GalleryModule { }
