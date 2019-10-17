import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    errorMessage ;
  loginUserData={

  }
    constructor(private _auth : AuthenticationService,
                private _router : Router) { }

    ngOnInit() {

    }

    loginUser(){
        this._auth.login(this.loginUserData)
            .subscribe(
                res=>{
                    console.log(res)
                    let jwt = res.token;
                    console.log(jwt);
                    //this.errorMessage = jwt.message
                    this._auth.saveToken(jwt);
                    this._router.navigateByUrl('/menu/home');

},error=>{this.errorMessage = error
                    // console.log(this.errorMessage)
                }
            )
    }
}
