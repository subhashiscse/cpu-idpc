import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/component/image-slider/image-slider.component';
import { FooterComponent } from './footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { IdpcModule } from './idpc/idpc/idpc.module';
import { SeminarModule } from './seminar/seminar/seminar.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    IdpcModule,
    SeminarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
