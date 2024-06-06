import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutIdpcComponent } from '../component/about-idpc/about-idpc.component';
import { ContestRulesComponent } from '../component/contest-rules/contest-rules.component';
import { FinalTeamListComponent } from '../component/final-team-list/final-team-list.component';
import { IdpcScheduleComponent } from '../component/idpc-schedule/idpc-schedule.component';
import { RegisteredTeamListComponent } from '../component/registered-team-list/registered-team-list.component';

const routes: Routes = [
  {
    path: '',
    component: AboutIdpcComponent
  },
  {
    path: 'contest-rules',
    component: ContestRulesComponent
  },
  {
    path: 'registered-team-list',
    component: RegisteredTeamListComponent
  },
  {
    path: 'final-team-list',
    component: FinalTeamListComponent
  },
  {
    path:'program-schedule',
    component: IdpcScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdpcRoutingModule { }
