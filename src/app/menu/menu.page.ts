import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menus = [
      {title:'Home',url:'/menu/home',icon:'home'},
      {
        title : 'Transaction',
        children: [
            { title:'Envoi',url:'/menu/transaction',icon:'git-compare'},
            {title:'Retrait',url:'/menu/retrait',icon:'eye'},

      ]
      },
      {title:'Operations',url:'/menu/operations',icon:'eye'},
     // {title:'Commissions',url:'/menu/commissions',icon:'logo-usd'},
      {title:'operationsList',url:'/menu/list-operation-id',icon:'logo-usd'},
      {title:'Logout',url:'logout',icon:'walk'},
  ]
  constructor(private router :Router, private auth : AuthenticationService) { }

  ngOnInit() {
  }
    onMenuAction(m){

      if (m.url=='logout') {
        this.auth.logoutUser();
        this.router.navigateByUrl("/login");
        
      }else{
        this.router.navigateByUrl(m.url);

      }
    }
}
