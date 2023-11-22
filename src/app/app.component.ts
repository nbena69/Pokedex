import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {POKEMONS} from "./mock-pokemon-list";
import {Pokemon} from "./pokemon";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, BorderCardDirective, PokemonTypeColorPipe],
    templateUrl: 'app.component.html'
})
export class AppComponent {}
