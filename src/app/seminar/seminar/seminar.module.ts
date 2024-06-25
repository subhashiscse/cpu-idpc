import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeminarRoutingModule } from './seminar-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AboutSeminarComponent } from '../component/about-seminar/about-seminar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SeminarSpeakerComponent } from '../component/seminar-speaker/seminar-speaker.component';
import { SeminarScheduleComponent } from '../component/seminar-schedule/seminar-schedule.component';


@NgModule({
  declarations: [
    AboutSeminarComponent,
    SeminarSpeakerComponent,
    SeminarScheduleComponent
  ],
  imports: [
    CommonModule,
    SeminarRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatTabsModule,
    MatProgressBarModule,
  ]
})
export class SeminarModule { }