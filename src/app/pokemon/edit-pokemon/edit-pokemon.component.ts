import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Pokemon} from "../pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import {PokemonFormComponent} from "../pokemon-form/pokemon-form.component";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-edit-pokemon',
    standalone: true,
    imports: [CommonModule, PokemonFormComponent],
    template: `
        <h2 class="center">
            Editer {{ pokemon?.name }}
            <p *ngIf="pokemon" class="center">
                <img [src]="pokemon.picture" alt="">
            </p>
            <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
        </h2>
    `,
    styles: ``,
    providers: [PokemonService, HttpClient]
})
export class EditPokemonComponent implements OnInit {
    pokemon: Pokemon | undefined;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService
    ) {}

    ngOnInit() {
        const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
        if (pokemonId) {
            this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
        } else {
            this.pokemon = undefined;
        }
    }
}
