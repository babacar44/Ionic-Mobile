import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isAuthenticated: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private  router:Router,
    private auth : AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
   //   this.loginUser();
    });
  }
 /* private  loginUser(){
   let isAuthenticated =this.auth.loadToken();
  if (this.isAuthenticated){
      this.router.navigateByUrl("/menu");
    }else {
    this.router.navigateByUrl("/login");
    }

  }*/
  ngOnInit(){
    this.auth.loadToken();
  }
  isSuperAdmin(){
    return this.auth.isSuperAdmin()
  }
  isCaissier(){
    return this.auth.isCaissier()
  }

  isPartener(){
    return this.auth.isPartener()
  }

  isAdminWari(){
    return this.auth.isAdminWari()
  }

  isUser(){
    return this.auth.isUser()
  }

  isAdminPartener(){
    return this.auth.isAdminPartener()
  }

  Authenticated(){
    return this.auth.isAuthenticated();
  }
}

