import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {BorderCardDirective} from "../border-card.directive";

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe, BorderCardDirective],
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonListe: Pokemon[] = POKEMONS;

}
