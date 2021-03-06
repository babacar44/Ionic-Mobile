import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthenticationService} from './services/authentication.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,BrowserAnimationsModule,ToastrModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
