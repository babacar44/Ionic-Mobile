import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../services/operations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.page.html',
  styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {
  Operations : [];
  id:number;
  op: any;
  datas:any;
  tarif: any;
  //////////////////////////


  infoOperation={}
  errorMessage : string;
  afficher:boolean=false;
  montrer:boolean=false;



  //////////////////
  constructor(private formBuilder: FormBuilder,private operlist : OperationsService,private router :Router
    ,private route :ActivatedRoute) { }

  ngOnInit() {
   /* this.operlist.ListerOperations()
    .subscribe(
      res=>{
        this.Operations = res
      //  console.log(res);
        console.log(this.Operations);
        this.afficher=true;
        this.montrer=true;

      },
      error=>console.log(error),
    )*/
  }


    now=new Date().toDateString();
    myform= new FormGroup({  
      debut: new FormControl(this.now,[Validators.required]),
      fin:  new FormControl(this.now,[Validators.required]),
 
    })
  


  listOperationById(id:number){
    this.router.navigate(['/menu/list-operation-id/',id]);
  }
 
///////////////////////
ByPeriode(){
  //console.log(this.myform);
  
  this.operlist.searchByDate(this.myform.value) 
   .subscribe(
    data=>{
      console.log(data);
      console.log(this.myform);
      this.datas = data;
      this.afficher=true;
      this.montrer=true;

    },
  
  error=>{this.errorMessage = error,
    console.log(this.errorMessage)}
    );
}
////////////////
segmentChanged(event:CustomEvent<SegmentChangeEventDetail>){
  console.log(event.detail.value);
 if (event.detail.value == 'operations') {
          this.afficher=true;
          this.montrer=false;

  }
  else{
    this.afficher=false;
    this.montrer=true;


  }
}



}
