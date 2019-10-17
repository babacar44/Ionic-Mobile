import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact ={
      name : "Sonatel Academy",
    email : "academysonatel@gmailcom",
    tel : 778584822,
    logo1: "assets/images/sonatel.png",
    logo2: "assets/images/babas.JPG"
  }
  constructor() {}

}
