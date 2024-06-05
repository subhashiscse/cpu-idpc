import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdpcRoutingModule } from './idpc-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AboutIdpcComponent } from '../component/about-idpc/about-idpc.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisteredTeamListComponent } from '../component/registered-team-list/registered-team-list.component';
import { FinalTeamListComponent } from '../component/final-team-list/final-team-list.component';
import { IdpcScheduleComponent } from '../component/idpc-schedule/idpc-schedule.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import{
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContestRulesComponent } from '../component/contest-rules/contest-rules.component';

@NgModule({
  declarations: [
    AboutIdpcComponent,
    RegisteredTeamListComponent,
    FinalTeamListComponent,
    IdpcScheduleComponent,
    ContestRulesComponent
  ],
  imports: [
    CommonModule,
    IdpcRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatTabsModule,
    MatProgressBarModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule
  ]
})
export class IdpcModule { }