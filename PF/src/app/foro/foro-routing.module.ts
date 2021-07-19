import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoComponent } from './foro/foro.component';

const routes: Routes = [
  {
    path: '',
    component: ForoComponent,
  },
  {
    path: '**',
    component: ForoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForoRoutingModule { }
