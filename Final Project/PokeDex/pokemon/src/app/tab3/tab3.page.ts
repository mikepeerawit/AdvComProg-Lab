import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  datastats : any;
  yourdatastats : any;
  datatopattack : [];
  datayourattack : [];
  datatopdefense : [];
  datayourdefense : [];
  segment1: boolean=true;
  segment2: boolean=false;
  segment3: boolean=false;
  segment4: boolean=false;
  segment5: boolean=false;
  segment6: boolean=false;
  offset = 0;

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.loadStats();
    this.loadYourStats();
    this.loadTopAttack();
    this.loadYourAttack();
    this.loadTopDefense();
    this.loadYourDefense();
  }

  segmentChanged(event) {
    var segment = event.target.value;
    if(segment == "segment1"){
      this.segment1 = true;
      this.segment2 = false;
      this.segment3 = false;
      this.segment4 = false;
      this.segment5 = false;
      this.segment6 = false;
    }
    else if(segment == "segment2"){
      this.segment1 = false;
      this.segment2 = true;
      this.segment3 = false;
      this.segment4 = false;
      this.segment5 = false;
      this.segment6 = false;
    }
    else if(segment == "segment3"){
      this.segment1 = false;
      this.segment2 = false;
      this.segment3 = true;
      this.segment4 = false;
      this.segment5 = false;
      this.segment6 = false;
    }
    else if(segment == "segment4"){
      this.segment1 = false;
      this.segment2 = false;
      this.segment3 = false;
      this.segment4 = true;
      this.segment5 = false;
      this.segment6 = false;
    }
    else if(segment == "segment5"){
      this.segment1 = false;
      this.segment2 = false;
      this.segment3 = false;
      this.segment4 = false;
      this.segment5 = true;
      this.segment6 = false;
    }
    else if(segment == "segment6"){
      this.segment1 = false;
      this.segment2 = false;
      this.segment3 = false;
      this.segment4 = false;
      this.segment5 = false;
      this.segment6 = true;
    }

  }

loadStats(){
    this.pokeService.getStats().subscribe(data => {
      console.log('data: ', data);
      this.datastats = data;
    });
  }
  
  loadYourStats(){
    this.pokeService.getYourStats().subscribe(data => {
      console.log('yourdata: ', data);
      this.yourdatastats = data;
    });
  }
   
  loadTopAttack(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
    this.pokeService.getTopAttack(this.offset).subscribe(res => {
      console.log('dataTopAttack: ', res);  
      this.datatopattack = res;
    });
  }
  
  loadYourAttack(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
    this.pokeService.getYourAttack(this.offset).subscribe(res => {
      console.log('dataYourAttack: ', res);  
      this.datayourattack = res;
    });
  }

  loadTopDefense(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
    this.pokeService.getTopDefense(this.offset).subscribe(res => {
      console.log('dataTopDefense: ', res);  
      this.datatopdefense = res;
    });
  }
  
  loadYourDefense(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
    this.pokeService.getYourDefense(this.offset).subscribe(res => {
      console.log('dataYourDefense: ', res);  
      this.datayourdefense = res;
    });
  }
  
}
