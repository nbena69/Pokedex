import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import { POKEMONS} from "./mock-pokemon-list";
import {Pokemon} from "./pokemon";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    template: `
        <h1>Liste de Pokémons</h1>
    `
})
export class AppComponent implements OnInit {
    pokemonListe: Pokemon[] = POKEMONS;

    ngOnInit() {
        console.table(this.pokemonListe);
        this.selectPokemon(this.pokemonListe[0]);
    }

    selectPokemon(pokemon: Pokemon){
        console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
    }
}
