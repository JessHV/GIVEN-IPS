import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
//La interface de usuario
import { UserInterface } from '../../models/user';
//Internacionalizacion
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router, private translateConfigService: TranslateConfigService) { }
  
  public isLogged: boolean = false;
  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: ''
  };
  public providerId: string = 'null';
  ngOnInit(): void {
    this.getCurrentUser();
    this.authService.isAuth().subscribe((user: any) => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
      }
    })
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;

      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }

    })
  }
  onLogout() {
    this.authService.logoutUser();
  }

  onLoginGoogle():void{
    this.authService.loginGoogleUser()
    .then((res)=>{
      console.log('resUser',res);
      this.onLoginRedirect();
    }).catch(err => console.log('err',err));
  }
  onLoginRedirect():void {
    this.router.navigate(['inicio']);
  }

  changeLang(type: string){
    this.translateConfigService.changeLanguage(type);
  }

}
