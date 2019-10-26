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

  private getByPeriode = "http://localhost:8000/api/listerperiode";

  private commissin ="http://localhost:8000/api/totalcommission";
  
  private tarifs ="http://localhost:8000/api/tarif";

  constructor(private http : HttpClient, private _injector : Injector) { }


  
  authentication = this._injector.get(AuthenticationService);

  faireEnvoi(envoi:any){
        console.log(envoi);
    return this.http.post<any>(this._envoiUrl, envoi)
     //   .map((res) => res).catch(this.authentication.handleError)

    
}
getItOperationById(id) : Observable<[]>{
  return this.http.get<[]>(this._getIt + id);
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


searchByDate(data){
  console.log(data)
  const dat={
    debut:data.debut,
    fin: data.fin
  }
  console.log(dat)
      return this.http.post<any>(this.getByPeriode,dat)
   //   .map((res) => res).catch(this.authentication.handleError)
    
    }


    getTotalCom() : Observable<[]>{
      return this.http.get<[]>(this.commissin);
    }

    getTarifs(frais){
      console.log(frais)
      const dat={
        montant: frais,
      }
  console.log(dat)
      return this.http.post<any>(this.tarifs,dat)
   //   .map((res) => res).catch(this.authentication.handleError)
    
    }
}
