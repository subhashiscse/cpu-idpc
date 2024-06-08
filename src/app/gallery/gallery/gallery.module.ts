import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryViewComponent } from '../component/gallery-view/gallery-view.component';


@NgModule({
  declarations: [GalleryViewComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class GalleryModule { }
