import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";

@Component({
    selector: 'app-pokemon-form',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pokemon-form.component.html',
    styles: ``
})
export class PokemonFormComponent implements OnInit {
    @Input() pokemon: Pokemon;
    types: string[];
    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit() {
        this.types = this.pokemonService.getPokemonTypeList();
    }

    hasType(type: string): boolean {
        return true;
    }

    selectType() {

    }

    onSubmit() {

    }
}
