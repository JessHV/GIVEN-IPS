import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ForoComponent } from './foro/foro.component';
import { MyPostsComponent } from './my-posts/my-posts.component';

const routes: Routes = [
  {
    path: '',
    component: ForoComponent,
  },
  {
    path: 'myposts',
    component: MyPostsComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'myposts/edit/:id',
    component: AddComponent,
  }, 
  {
    path: 'comentario/:id',
    component: ComentarioComponent,
  },
  {
    path: '**',
    component: ForoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoRoutingModule { }
