import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { IdProvider } from '../../providers/id/id';
import { Temp } from '../../models/temp.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public temp$: Observable<Temp>;
  public student_id: string;
  constructor(private tempProvider: IdProvider,public navCtrl: NavController) {
  }

  showTemp(si: string) {
    console.log(si);
    this.temp$=this.tempProvider.getTemp(si);
  }

}
