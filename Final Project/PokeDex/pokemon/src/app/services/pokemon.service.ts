import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'http://127.0.0.1:5000/'
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemon(offset = 0) {
    return this.http
      .get(`${this.baseUrl}pokemon?offset=${offset}`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        map(pokemon => {
          return pokemon.map((poke, index) => {
            poke.image = this.getPokeImage(offset + index + 1);
            poke.pokeIndex = offset + index + 1;
            return poke;
          });
        })
      );
  }

  findPokemon(search) {
    return this.http.get(`${this.baseUrl}pokemon/?search=${search}`).pipe(
      map(pokemon => {
        pokemon['image'] = this.getPokeImage(pokemon['id']);
        pokemon['pokeIndex'] = pokemon['id'];
        return pokemon;
      })
    );
  }

  getPokeImage(index) {
    return `${this.imageUrl}${index}.png`;
  }

  getPokeDetails(index) {
    return this.http.get(`${this.apiUrl}/pokemon/${index}`).pipe(
      map(poke => {
        let sprites = Object.keys(poke['sprites']);
        poke['images'] = sprites
          .map(spriteKey => poke['sprites'][spriteKey])
          .filter(img => img)
          .slice(0,4);
        console.log('poke: ',poke)
        return poke;
      })
    );
  }

  createPokemon(name,type_1,type_2,weight,hp,attack,defense,special_attack,special_defense,speed) {
    return this.http.get(`${this.baseUrl}add?name=${name}&type_1=${type_1}&type_2=${type_2}&weight=${weight}&hp=${hp}&attack=${attack}&defense=${defense}&special_attack=${special_attack}&special_defense=${special_defense}&speed=${speed}`)
  }

  getYour(offset = 0) {
    return this.http
      .get(`${this.baseUrl}yourpokemon?offset=${offset}`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        map(pokemon => {
          return pokemon.map((poke, index) => {
            poke.pokeIndex = offset + index + 1;
            return poke;
          });
        })
      );
  }

  getYourDetails(name) {
    return this.http.get(`${this.baseUrl}yourpokemon/?search=${name}`).pipe(
      map(poke => {
        console.log('poke: ',poke)
        return poke;
      })
    );
  }

  findYour(search) {
    return this.http.get(`${this.baseUrl}yourpokemon/?search=${search}`).pipe(
      map(pokemon => {
        return pokemon;
      })
    );
  }

  getStats() {
    return this.http.get(`${this.baseUrl}stats`);
  }

  getYourStats() {
    return this.http.get(`${this.baseUrl}yourstats`);
  }

  getTopAttack(offset = 0) {
    return this.http
      .get(`${this.baseUrl}topattack?offset=${offset}`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  
  getYourAttack(offset = 0) {
    return this.http
      .get(`${this.baseUrl}yourtopattack?offset=${offset}`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  
  getTopDefense(offset = 0) {
    return this.http
      .get(`${this.baseUrl}topdefense?offset=${offset}`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }

  getYourDefense(offset = 0) {
    return this.http
      .get(`${this.baseUrl}yourtopdefense?offset=${offset}`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }

}
