import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imageVal: string;
  cardImageVal: string;
  constructor(public navCtrl: NavController) {
    this.cardImageVal="https://cdn.ccn.com/wp-content/uploads/2020/01/jurgen-klopp-liverpool-ap-1024x680.jpg"
  }
  buttonClick() {
  this.cardImageVal = this.imageVal;
  }

}
