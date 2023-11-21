import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'pokemonTypeColor',
    standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        return null;
    }

}
