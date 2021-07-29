import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PostInterface } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor(private firestore: AngularFirestore) {

  }
  agregarPost(user: PostInterface): Promise<any> {
    return this.firestore.collection('posts').add(user);
  } 
  agregarComentario(user: PostInterface): Promise<any> {
    return this.firestore.collection('comentarios').add(user);
  }
  getPosts(): Observable<any> {
    return this.firestore.collection('posts', ref => ref.orderBy('start_time', 'desc')).snapshotChanges();
  }
  getComentarios(): Observable<any> {
    return this.firestore.collection('comentarios', ref => ref.orderBy('start_time', 'desc')).snapshotChanges();
  }
  eliminarPost(id: string): Promise<any> {
    return this.firestore.collection('posts').doc(id).delete();
  }
  getPost(id: string | any): Observable<any> {
    return this.firestore.collection('posts').doc(id).snapshotChanges();
  }
  actualizarPost(id: string, data: any): Promise<any> {
    return this.firestore.collection('posts').doc(id).update(data);
  }
}
