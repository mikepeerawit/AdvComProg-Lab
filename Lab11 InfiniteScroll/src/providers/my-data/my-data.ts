import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MyDataProvider Provider');
  }

  getData(itemList,num,event) {
    console.log("I'll get the data");
    this.http.get('http://f1361ff7af4c.ngrok.io/get?num='+num).subscribe(data => {
      for (let i=0;i<data.data.length;i++)
        itemList.push(data.data[i]);  
      if(num != 0 && num < 1000)
        event.complete();
    });
  }

}
