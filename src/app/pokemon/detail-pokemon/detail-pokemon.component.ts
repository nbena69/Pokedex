import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Pokemon} from "../pokemon";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe, RouterLink],
  templateUrl: './detail-pokemon.component.html',
  providers: [PokemonService]

})
export class DetailPokemonComponent implements OnInit{
  pokemon: Pokemon |undefined;

  //Permet de rendre le service route disponible dans le composant
  constructor(private  route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}
  ngOnInit() {
    //recupere ID
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList() {
    this.router.navigate( ['/pokemons']);
  }
}
