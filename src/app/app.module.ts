import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonModule} from './pokemon/pokemon.module';
import {AppRoutes} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule, InMemoryDbService} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
        PokemonModule,
        AppRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
