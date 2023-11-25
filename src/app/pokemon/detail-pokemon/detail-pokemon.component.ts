import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import { POKEMONS } from "../mock-pokemon-list";
import {Pokemon} from "../pokemon";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe, RouterLink],
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit{
  pokemonList: Pokemon[];
  pokemon: Pokemon |undefined;

  //Permet de rendre le service route disponible dans le composant
  constructor(private  route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.pokemonList = POKEMONS;
    //recupere ID
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

  goToPokemonList() {
    this.router.navigate( ['/pokemons']);
  }
}
