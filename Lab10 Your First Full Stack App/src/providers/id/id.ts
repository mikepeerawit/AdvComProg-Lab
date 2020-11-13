import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Temp } from '../../models/temp.model';

/*
  Generated class for the IdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IdProvider {
  private tempURL = "http://f46b44e9701e.ngrok.io/get?id="
  constructor(public http: HttpClient) {
    console.log('Hello IdProvider Provider');
  }

  public getTemp(student_id: string) {
    console.log(this.tempURL+student_id);
    return this.http.get<Temp>(this.tempURL+student_id);
  }  
}
