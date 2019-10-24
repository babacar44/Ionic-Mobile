import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
user= new FormGroup({
  email : new FormControl('',[Validators.required,Validators.minLength(3)]),
  password : new FormControl('',Validators.required)
})
    loginUser(donnee){
        this._auth.login(donnee)
            .subscribe(
                res=>{
                    console.log(res)
                    let jwt = res.token;
                    console.log(jwt);
                    //this.errorMessage = jwt.message
                    this._auth.saveToken(jwt);
                    this._router.navigateByUrl('/menu/home');

},error=>{this.errorMessage = error
                   //  console.log(this.errorMessage)
                }
            )
    }
}
