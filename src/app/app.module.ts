import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/component/image-slider/image-slider.component';
import { FooterComponent } from './footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdpcModule } from './idpc/idpc/idpc.module';
import { SeminarModule } from './seminar/seminar/seminar.module';
import { HttpClientModule } from '@angular/common/http';
import { IdpcCommitteeModule } from './committee/idpc-committee/idpc-committee.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContactInfoComponent } from './contactus/contact-info/contact-info.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AppDialogComponent } from './dialog-modal/app-dialog/app-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    FooterComponent,
    ContactInfoComponent,
    AppDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    IdpcModule,
    SeminarModule,
    HttpClientModule,
    IdpcCommitteeModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }