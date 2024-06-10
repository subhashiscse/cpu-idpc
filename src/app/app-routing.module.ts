import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '**', redirectTo: '/cpuidpc' },
  {
    path: 'idpc',
    loadChildren: () => import('../app/idpc/idpc/idpc.module').then(m => m.IdpcModule),
  },
  {
    path: 'seminar',
    loadChildren: () => import('../app/seminar/seminar/seminar.module').then(m => m.SeminarModule),
  },
  {
    path: 'committee',
    loadChildren: () => import('../app/committee/idpc-committee/idpc-committee.module').then(m => m.IdpcCommitteeModule),
  },
  {
    path: 'gallery',
    loadChildren: () => import('../app/gallery/gallery/gallery.module').then(m => m.GalleryModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }