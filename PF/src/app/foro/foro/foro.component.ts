import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ForoService } from 'src/app/services/foro.service';
//Internacionalizacion
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  posts: any[] = [];
  constructor(private authService: AuthService, private afsAuth: AngularFireAuth,
    firestore: AngularFirestore, private postService: ForoService, private translateConfigService: TranslateConfigService) {

  }
  ngOnInit(): void {
    this.getComentarios();

  }
  getComentarios() {
    this.postService.getPosts().subscribe(data => {
      this.posts = [];
      data.forEach((element: any) => {
        this.posts.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
      });
    });
    
  }
}
