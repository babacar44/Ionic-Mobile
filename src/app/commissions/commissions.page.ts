import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../services/operations.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.page.html',
  styleUrls: ['./commissions.page.scss'],
})
export class CommissionsPage implements OnInit {

  donnee:{}
  errorMessage : String;
  constructor(private _operer : OperationsService, private _toastr : ToastrService,
    private _router : Router) { }

  ngOnInit() {
    this._operer.getTotalCom().subscribe(
      data=>{
          this.donnee =data;
          console.log(data);

      }
    )
    error=>{this.errorMessage = error,
      console.log(this.errorMessage)}
  }

}
