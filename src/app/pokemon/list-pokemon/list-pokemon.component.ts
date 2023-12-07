import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Pokemon} from "../pokemon";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {BorderCardDirective} from "../border-card.directive";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-list-pokemon',
    standalone: true,
    imports: [CommonModule, PokemonTypeColorPipe, BorderCardDirective],
    templateUrl: './list-pokemon.component.html',
    providers: [PokemonService, HttpClient]
})
export class ListPokemonComponent implements OnInit {
    pokemonListe: Pokemon[];

    constructor(
        private router: Router,
        private pokemonService: PokemonService
    ) {}

    ngOnInit() {
        this.pokemonService.getPokemonList().subscribe(pokemonListe => this.pokemonListe = pokemonListe);
    }

    goToPokemon(pokemon: Pokemon) {
        this.router.navigate(['/pokemon', pokemon.id]);
    }
}
