import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonModule} from './pokemon/pokemon.module';
import {AppRoutes} from "./app.routes";

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        PokemonModule,
        AppRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
