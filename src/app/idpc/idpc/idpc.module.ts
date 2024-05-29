import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdpcRoutingModule } from './idpc-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AboutIdpcComponent } from '../component/about-idpc/about-idpc.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AboutIdpcComponent
  ],
  imports: [
    CommonModule,
    IdpcRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule
  ]
})
export class IdpcModule { }