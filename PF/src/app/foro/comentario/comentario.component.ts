import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { ForoService } from 'src/app/services/foro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostInterface } from 'src/app/models/post';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  comentarios: any[] = [];
  user: PostInterface = {};
  userC: PostInterface = {};
  id: string | null;
  createComent: FormGroup;
  submitted = false;
  value: string = '';
  constructor(private fb: FormBuilder, private authService: AuthService,
    private afsAuth: AngularFireAuth, private postService: ForoService,
    private router: Router, private aRoute: ActivatedRoute) {
    this.createComent = this.fb.group({
      comentario: ['', Validators.minLength(10)],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getPost();
    this.getComentarios();
  }
  getPost() {
    this.postService.getPost(this.id).subscribe(data => {
      this.user.name = data.payload.data().name,
        this.user.titulo = data.payload.data().titulo,
        this.user.start_time = data.payload.data().start_time.toDate(),
        this.user.comentario = data.payload.data().comentario,
        this.user.photoUrl = data.payload.data().photoUrl

    })
  }
  agregarComentario() {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.submitted = true;
    if (this.createComent.invalid || this.createComent.controls['comentario'].value=='') {
      return;
    }
    this.authService.isAuth().subscribe((user: any) => {
      if (user) {
        this.userC.name = user.displayName;
        this.userC.photoUrl = user.photoURL;
        this.userC.email = user.email;
        this.userC.comentario = this.createComent.value.comentario;
        this.userC.start_time = new Date();
        this.userC.idC = this.id;
      }
      this.createComent.reset();
      this.postService.agregarComentario(this.userC).then(() => {
        console.log('Comentario guardado');
      }).catch(error => {
        console.log(error);
      })
    })
  }
  getComentarios() {
    this.postService.getComentarios().subscribe(data => {
      this.comentarios = [];
      data.forEach((element: any) => {
        if (element.payload.doc.data().idC == this.id) {
          this.comentarios.push({
            ...element.payload.doc.data(),
          })
        }
      });
    });
  }
}