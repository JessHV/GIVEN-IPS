import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afsAuth:AngularFireAuth) { }
  //inicio con Face
  loginFacebookUser(){
    return this.afsAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  //inicio con Google
  loginGoogleUser(){
    return this.afsAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logoutUser(){
    return this.afsAuth.signOut();
  }
  /// metodo que comprueba que nuestro usuario esta logeado
  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}
