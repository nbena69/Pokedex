import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {POKEMONS} from "./mock-pokemon-list";
import {Pokemon} from "./pokemon";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    pokemonListe: Pokemon[] = POKEMONS;
    pokemonSelected: Pokemon | undefined;

    ngOnInit() {
        console.table(this.pokemonListe);
    }

    selectPokemon(pokemonID: string) {
        const id = +pokemonID;
        const pokemon: Pokemon | undefined = this.pokemonListe.find(pokemon => pokemon.id == +pokemonID);
        if ((pokemon)) {
            console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
            this.pokemonSelected = pokemon;
        } else {
            console.log(`Vous avez demander un pokémon qui n'existe pas.`);
            this.pokemonSelected = pokemon;
        }
    }


}
