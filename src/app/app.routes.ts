import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonModule } from './pokemon/pokemon.module';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ListPokemonComponent} from "./pokemon/list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./pokemon/detail-pokemon/detail-pokemon.component";
import {EditPokemonComponent} from "./pokemon/edit-pokemon/edit-pokemon.component";

export const routes: Routes = [
    { path: 'edit/pokemon/:id', component: EditPokemonComponent },
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutes {}
