import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ForoService } from 'src/app/services/foro.service';
import { UserInterface } from '../../models/user';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  user: UserInterface = {};
  posts: any[] = [];
  constructor(private authService: AuthService, private afsAuth: AngularFireAuth,
    firestore: AngularFirestore, private postService: ForoService) {
    this.afsAuth.authState.subscribe((user: any) => {
      if (user) {
        this.user.id = user.uid;
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
      }
    })

  }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = [];
      data.forEach((element: any) => {
        if (this.user.id == element.payload.doc.data().idUser) {
          this.posts.push({
            id: element.payload.doc.id,
            start: element.payload.doc.data().start_time,
            ...element.payload.doc.data(),
          })
        }
      });
    });
  }
  eliminarComentario(id: string) {
    this.postService.eliminarPost(id).then(() => {
      console.log('comentario eliminado')
    }).catch(error => {
      console.log(error);
    })
  }
}
