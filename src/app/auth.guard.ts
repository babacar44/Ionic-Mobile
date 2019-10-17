import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthenticationService,
    private _router: Router){ }

canActivate(): boolean{
if(localStorage.getItem('token')){
return true
}else {
this._router.navigate(['/login'])
return false
}           
}
}  

