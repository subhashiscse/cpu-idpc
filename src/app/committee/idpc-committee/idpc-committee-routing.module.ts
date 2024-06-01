import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisoryCommitteeComponent } from '../component/advisory-committee/advisory-committee.component';
import { GoverningCommitteeComponent } from '../component/governing-committee/governing-committee.component';
import { OrganizingCommitteeComponent } from '../component/organizing-committee/organizing-committee.component';

const routes: Routes = [
  {
    path: '',
    component: AdvisoryCommitteeComponent
  },
  {
    path: 'advisory-committee',
    component: AdvisoryCommitteeComponent
  },
  {
    path: 'governing-committee',
    component: GoverningCommitteeComponent
  },
  {
    path:'organizing-committee',
    component: OrganizingCommitteeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdpcCommitteeRoutingModule { }
