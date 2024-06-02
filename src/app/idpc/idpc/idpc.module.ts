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

@NgModule({
  declarations: [
    AboutIdpcComponent,
    RegisteredTeamListComponent,
    FinalTeamListComponent,
    IdpcScheduleComponent
  ],
  imports: [
    CommonModule,
    IdpcRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatTabsModule
  ]
})
export class IdpcModule { }