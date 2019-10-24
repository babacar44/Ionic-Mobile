import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../services/operations.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.page.html',
  styleUrls: ['./commissions.page.scss'],
})
export class CommissionsPage implements OnInit {

  Operations : [];
  id:number;
  op: any;

  afficherRecu=false;

  constructor(private operlist : OperationsService,private router :Router
    ,private route :ActivatedRoute) { }

  ngOnInit() {
    this.operlist.ListerOperations()
    .subscribe(
      res=>{
        this.Operations = res
      //  console.log(res);
        console.log(this.Operations);
      },
      error=>console.log(error),
    )
  }
  getOp(){

    
  }
  listOperationById(id:number){
    this.router.navigate(['/menu/list-operation-id/',id]);
  }

}
