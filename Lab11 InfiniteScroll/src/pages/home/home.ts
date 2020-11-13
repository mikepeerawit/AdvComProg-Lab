import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyDataProvider } from '../../providers/my-data/my-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemListData =  [];
  pageNumber = 0;
  constructor(public myDataProvider: MyDataProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    this.myDataProvider.getData(this.itemListData,0,"");
    console.log('itemListData');
    console.log(this.itemListData);
  }

  doInfinite(event) {
    this.pageNumber++;
    console.log(this.pageNumber);
    this.myDataProvider.getData(this.itemListData,this.pageNumber*20,event);
  }
}
