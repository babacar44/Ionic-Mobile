import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,

    children:[
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'transaction', loadChildren: '../transaction/transaction.module#TransactionPageModule' },
      { path: 'operations', loadChildren: '../operations/operations.module#OperationsPageModule' },
      { path: 'commissions', loadChildren: '../commissions/commissions.module#CommissionsPageModule' },
      { path: 'list-operation-id/:id', loadChildren: '../list-operation-id/list-operation-id.module#ListOperationIdPageModule' },
      { path: 'retrait', loadChildren: '../retrait/retrait.module#RetraitPageModule' },
      
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
