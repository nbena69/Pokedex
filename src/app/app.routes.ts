import { Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import {ListPokemonComponent} from "./pokemon/list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./pokemon/detail-pokemon/detail-pokemon.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent},
    { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
];
