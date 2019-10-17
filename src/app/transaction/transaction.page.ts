import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { OperationsService } from '../services/operations.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  errorMessage : string;
afficherRecu=false;

 postEnvoi ={};

  constructor(private _operationService : OperationsService,
    private _router : Router,
    // private _toastr : ToastrService,
    private _injector : Injector) { }

  ngOnInit() {

}

  faireEnvoi(){
    if(window.confirm('Are you sure  you want to send ?')){
        this._operationService.faireEnvoi(this.postEnvoi)
    .subscribe(
    data =>{
      console.log(this.postEnvoi)

        console.log(data);
      this._router.navigateByUrl("/menu/operations")},
    )
}else{
  error =>{
    this.errorMessage = error,
    console.log(this.errorMessage)
  }
}
  }
}