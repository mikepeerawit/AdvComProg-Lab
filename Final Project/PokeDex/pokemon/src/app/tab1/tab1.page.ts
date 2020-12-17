import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  offset = 0;
  pokemon = [];

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
    this.pokeService.getPokemon(this.offset).subscribe(res => {
      console.log('result: ', res);
      this.pokemon = [...this.pokemon, ...res];

      if (event) {
        event.target.complete();
      }

      if (this.offset == 700) {
        this.infinite.disabled = true;
      }
    });

  }

  onSearchChange(e) {
    let value = e.detail.value;

    if (value == '') {
      this.offset = 0;
      this.loadPokemon();
      return;
    }

    this.pokeService.findPokemon(value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });

  
  }

}
