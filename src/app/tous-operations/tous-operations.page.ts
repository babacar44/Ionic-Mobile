import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationsService } from '../services/operations.service';

@Component({
  selector: 'app-tous-operations',
  templateUrl: './tous-operations.page.html',
  styleUrls: ['./tous-operations.page.scss'],
})
export class TousOperationsPage implements OnInit {
  Operations : [];

  constructor(private operlist : OperationsService,private router :Router
    ,private route :ActivatedRoute) { }

  ngOnInit() {
    this.operlist.ListerOperations()
    .subscribe(
      res=>{
        this.Operations = res
       console.log(res);
        console.log(this.Operations);
       // this.afficher=true;
        //this.montrer=true;

      },
      error=>console.log(error),
    )
  }
  listOperationById(id:number){
    this.router.navigate(['/menu/list-operation-id/',id]);
  }
}
