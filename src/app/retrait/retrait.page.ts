import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OperationsService } from '../services/operations.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {

  errorMessage : string;


  codeEnvoiArray : any = [
    {
      CodeEnvoi : ' '
    }
  ];
  afficher:boolean=false;

  infoRetrait={}

  constructor(private _operer : OperationsService, private _toastr : ToastrService) { }

  ngOnInit() {
    this.reseteForm;
  }
  reseteForm(form : NgForm){
    if(form != null  )
      form.resetForm();
    this.codeEnvoiArray = null;
  }
onRetrait(codeEnvoiArray){
  console.log(codeEnvoiArray)
  const data={
    CodeEnvoi:codeEnvoiArray
  }
  this._operer.getRetrait(data)
    .subscribe(
      data=>{
        console.log(data);
        this.codeEnvoiArray = data
        this.afficher=true;
     
    
      },
      err=>console.log(err),
    );
}

DoRetrait(infoRetrait){
  console.log(infoRetrait)
  const data={
    CodeEnvoi : infoRetrait,
    cniRecepteur : infoRetrait
  }
  this._operer.faireRetrait(infoRetrait)
  .subscribe(
    data=>{
      this._toastr.success('retrait validé sur le compte '),

      console.log(data);
      this.infoRetrait = data
    },
  
  error=>{this.errorMessage = error.error.message,
    console.log(this.errorMessage)}
    );
}

}