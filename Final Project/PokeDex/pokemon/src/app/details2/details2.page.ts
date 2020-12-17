import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details2',
  templateUrl: './details2.page.html',
  styleUrls: ['./details2.page.scss'],
})

export class Details2Page implements OnInit {

  details: any;

  constructor(private route: ActivatedRoute, private pokeService: PokemonService) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.pokeService.getYourDetails(name).subscribe(details => {
      this.details= details;
    });
  }
}
