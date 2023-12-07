import {Injectable} from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {response} from "express";

@Injectable()
export class PokemonService {

    constructor(private http: HttpClient) {

    }

    getPokemmonList(): Observable<Pokemon[]> {
        //return POKEMONS;
        return this.http.get<Pokemon[]>('api/pokemons').pipe(
            //tap = console.log mais pour Observable
            tap((response) => this.log(response)),
            //permet d'intercepter l'erreur et retourné tableau vide plutôt que application crash
            catchError((Error) => this.handleError(Error, [])
            )
        )
    }


    getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
        return this.http.get<Pokemon>(`api/pokemon/${pokemonId}`).pipe(
            tap((response) => this.log(response)),
            catchError((Error) => this.handleError(Error, undefined)
            )
        )
    }

    private handleError(error: Error, errorValue: any) {
        console.error(error);
        return of(errorValue)
    }

    private log(response: Pokemon[] | Pokemon | undefined) {
        console.table(response);
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
