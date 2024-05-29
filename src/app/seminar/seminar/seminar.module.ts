import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeminarRoutingModule } from './seminar-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AboutSeminarComponent } from '../component/about-seminar/about-seminar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AboutSeminarComponent
  ],
  imports: [
    CommonModule,
    SeminarRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule
  ]
})
export class SeminarModule { }