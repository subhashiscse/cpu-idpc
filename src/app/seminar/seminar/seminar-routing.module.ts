import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSeminarComponent } from '../component/about-seminar/about-seminar.component';
import { SeminarSpeakerComponent } from '../component/seminar-speaker/seminar-speaker.component';

const routes: Routes = [
  {
    path: '',
    component: AboutSeminarComponent
  },
  {
    path: 'schedule',
    component: AboutSeminarComponent
  },
  {
    path: 'seminar-speaker',
    component: SeminarSpeakerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeminarRoutingModule { }
