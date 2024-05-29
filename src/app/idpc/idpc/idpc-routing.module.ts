import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutIdpcComponent } from '../component/about-idpc/about-idpc.component';
import { IdpcScheduleComponent } from '../component/idpc-schedule/idpc-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: AboutIdpcComponent
  },
  {
    path:'schedule',
    component: IdpcScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdpcRoutingModule { }
