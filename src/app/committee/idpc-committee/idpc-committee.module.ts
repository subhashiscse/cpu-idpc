import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdpcCommitteeRoutingModule } from './idpc-committee-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { AdvisoryCommitteeComponent } from '../component/advisory-committee/advisory-committee.component';
import { GoverningCommitteeComponent } from '../component/governing-committee/governing-committee.component';
import { OrganizingCommitteeComponent } from '../component/organizing-committee/organizing-committee.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [AdvisoryCommitteeComponent, GoverningCommitteeComponent, OrganizingCommitteeComponent],
  imports: [
    CommonModule,
    IdpcCommitteeRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
  ]
})
export class IdpcCommitteeModule { }
