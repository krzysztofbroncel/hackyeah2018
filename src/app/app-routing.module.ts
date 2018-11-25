import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  { 
    path: 'form', 
    loadChildren: './form/form.module#FormPageModule' 
  },
  { 
    path: 'slides', 
    loadChildren: './slides/slides.module#SlidesPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
