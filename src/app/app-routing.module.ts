import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'idpc',
    loadChildren: () => import('../app/idpc/idpc/idpc.module').then(m => m.IdpcModule),
  },
  {
    path: 'seminar',
    loadChildren: () => import('../app/seminar/seminar/seminar.module').then(m => m.SeminarModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
