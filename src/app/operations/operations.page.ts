import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../services/operations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.page.html',
  styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {
  Operations : [];

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
  listOperationById(id:number){
    this.router.navigate(['/menu/list-operation-id',id]);
  }
 

  

}
