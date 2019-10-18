import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  private _envoiUrl = "http://localhost:8000/api/envoi";
  private _retrait = " http://localhost:8000/api/codeFinder";
  private _okRetrait =" http://localhost:8000/api/retrait";
  private _OperationsList = " http://localhost:8000/api/listerOperation";

  private _getIt ="http://localhost:8000/api/listeroperations/";
  
  constructor(private http : HttpClient, private _injector : Injector) { }


  
  authentication = this._injector.get(AuthenticationService);

  faireEnvoi(envoi:any){
        console.log(envoi);
    return this.http.post<any>(this._envoiUrl, envoi)
     //   .map((res) => res).catch(this.authentication.handleError)

    
}

  getRetrait(data){  
    return this.http.post<any>(this._retrait,data)
  }
  
  faireRetrait(data){
console.log(data)
const dat={
  CodeEnvoi: data.CodeEnvoi,
  cniRecepteur: data.cniRecepteur
}
console.log(dat)
    return this.http.post<any>(this._okRetrait,dat)
 //   .map((res) => res).catch(this.authentication.handleError)
  
  }

// getAllEnvoi() : Observable<Ienvoi[]>{
//   // return this.http.get<Ienvoi[]>();
// }
ListerOperations() :Observable<any>{
  return this.http.get<any>(this._OperationsList);
}
getItById(id) : Observable<any>{
  return this.http.get<any>(this._getIt + id);
}
}