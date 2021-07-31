import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostInterface } from 'src/app/models/post';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { ForoService } from 'src/app/services/foro.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  userC: PostInterface = {};
  createComent: FormGroup;
  submitted = false;
  id: string | null;
  titulo = 'Agregar Post';
  vista = 'Agregar';
  dir = '/foro';
  constructor(private fb: FormBuilder, private authService: AuthService,
    private afsAuth: AngularFireAuth, private foroService: ForoService,
    private router: Router, private aRoute: ActivatedRoute) {
    this.createComent = this.fb.group({
      titulo: ['', Validators.required],
      comentario: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarEditar() {
    this.submitted = true;
    if (this.createComent.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarComentario();
    } else {
      this.editarComentario(this.id);
    }
  }
  agregarComentario() {
    this.authService.isAuth().subscribe((user: any) => {
      if (user) {
        this.userC.name = user.displayName;
        this.userC.email = user.email;
        this.userC.photoUrl = user.photoURL;
        this.userC.comentario = this.createComent.value.comentario;
        this.userC.titulo = this.createComent.value.titulo;
        this.userC.start_time = new Date();
        this.userC.idUser = user.uid;
      }
      this.foroService.agregarPost(this.userC).then(() => {
        console.log('Comentario guardado');
        this.router.navigate(['/foro']);
      }).catch(error => {
        console.log(error);
      })
    })
  }
  editarComentario(id: string) {
    this.authService.isAuth().subscribe((user: any) => {
      if (user) {
        this.userC.name = user.displayName;
        this.userC.email = user.email;
        this.userC.photoUrl = user.photoURL;
        this.userC.comentario = this.createComent.value.comentario;
        this.userC.titulo = this.createComent.value.titulo;
        this.userC.start_time = new Date();
        this.userC.idUser = user.uid;
      }
      this.foroService.actualizarPost(id, this.userC).then(() => {
        console.log('actualizado');
      })
      this.router.navigate(['/foro/myposts']);
    })
  }
  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Post'
      this.vista = 'Editar'
      this.dir = '/foro/myposts'
      this.foroService.getPost(this.id).subscribe(data => {
        this.createComent.setValue({
          titulo: data.payload.data()['titulo'],
          comentario: data.payload.data()['comentario'],
        })
      })
    }
  }
}
