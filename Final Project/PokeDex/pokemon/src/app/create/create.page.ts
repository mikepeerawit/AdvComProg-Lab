import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  name: string;
  type_1: string;
  type_2: string;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;

  constructor( private pokeService: PokemonService ) {}

  addPokemon(name,type_1,type_2,weight,hp,attack,defense,special_attack,special_defense,speed) {
    this.name = name;
    this.type_1 = type_1;
    this.type_2 = type_2;
    this.weight = weight;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.special_attack = special_attack;
    this.special_defense = special_defense;
    this.speed = speed;

    this.pokeService.createPokemon(this.name,this.type_1,this.type_2,this.weight,this.hp,this.attack,this.defense,this.special_attack,this.special_defense,this.speed).subscribe(item => {
      console.log(item)
    })
  }

  ngOnInit() {
  }

}
