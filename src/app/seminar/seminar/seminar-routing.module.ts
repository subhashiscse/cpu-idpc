import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSeminarComponent } from '../component/about-seminar/about-seminar.component';

const routes: Routes = [
  {
    path: '',
    component: AboutSeminarComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeminarRoutingModule { }
