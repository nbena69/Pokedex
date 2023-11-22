import { Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
    { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
];
