import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
    providedIn: 'root',
})


export class PokemonService {

    constructor(private http: HttpClient) {

    }

    getPokemonList(): Observable<Pokemon[]> {
        //return POKEMONS;
        return this.http.get<Pokemon[]>('api/pokemons').pipe(

            //tap = console.log mais pour Observable

            tap((response) => this.log(response)),

            //permet d'intercepter l'erreur et retourné tableau vide plutôt que application crash

            catchError((error) => this.handleError(error, [])
            )
        )
    }


    getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
        return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, undefined)
            )
        )
    }

    public log(response: any) {
        console.table(response);
    }

    public handleError(error: Error, errorValue: any) {
        console.error(error);
        return of(errorValue);
    }

    getPokemonTypeList(): string[] {
        return [
            'Plante',
            'Feu',
            'Eau',
            'Insecte',
            'Normal',
            'Electrik',
            'Poison',
            'Fée',
            'Vol',
            'Combat',
            'Psy'
        ]
    }
}
