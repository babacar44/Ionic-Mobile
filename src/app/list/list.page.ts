import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../services/operations.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  infoOperation={}
  errorMessage : string;


  constructor(private _operer : OperationsService, private _toastr : ToastrService,
    private _router : Router) { }

  ngOnInit() {
    

  }

  ByPeriode(){
    this._operer.searchByDate(this.infoOperation) 
     .subscribe(
      data=>{
        console.log(data);
        console.log(this.infoOperation);
        this.infoOperation = data
  
      },
    
    error=>{this.errorMessage = error.error.message,
      console.log(this.errorMessage)}
      );
  }
}
