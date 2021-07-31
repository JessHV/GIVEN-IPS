import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForoRoutingModule } from './foro-routing.module';
import { ForoComponent } from './foro/foro.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ForoComponent,
    AddComponent,
    MyPostsComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    ForoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class ForoModule { }
