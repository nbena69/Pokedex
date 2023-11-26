import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";

@Component({
    selector: 'app-pokemon-form',
    standalone: true,
    imports: [CommonModule, FormsModule, PokemonTypeColorPipe],
    templateUrl: './pokemon-form.component.html'
})
export class PokemonFormComponent implements OnInit {
    @Input() pokemon: Pokemon;
    types: string[];
    type: string;

    constructor(private pokemonService: PokemonService, private router: Router) {
    }

    ngOnInit() {
        this.types = this.pokemonService.getPokemonTypeList();
    }

    hasType(type: string): boolean {
        return this.pokemon.types.includes(type);
    }

    selectType($event: Event, type: string) {
        const isChecked = ($event.target as HTMLInputElement).checked;
        if (isChecked) {
            this.pokemon.types.push(type);
        } else {
            const index = this.pokemon.types.indexOf(type);
            this.pokemon.types.splice(index, 1);
        }
    }

    onSubmit() {
        console.log('Fourmulaire ajouter !')
        this.router.navigate(['/pokemon', this.pokemon.id]);
    }

}
