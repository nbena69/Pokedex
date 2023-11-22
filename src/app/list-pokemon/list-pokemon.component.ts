import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {BorderCardDirective} from "../border-card.directive";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe, BorderCardDirective],
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonListe: Pokemon[] = POKEMONS;

  constructor(private router: Router) {

  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
