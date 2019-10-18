import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../services/operations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-operation-id',
  templateUrl: './list-operation-id.page.html',
  styleUrls: ['./list-operation-id.page.scss'],
})
export class ListOperationIdPage implements OnInit {
  op: any;
  id:number;

  constructor(private operlist : OperationsService,private router :Router
    ,private route :ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.operlist.getItOperationById(+this.id).subscribe(
      res=>{
        console.log(res)
        this.op = res
        console.log(this.op)
      },
      error=>console.log(error)
    )
  }
      

}
