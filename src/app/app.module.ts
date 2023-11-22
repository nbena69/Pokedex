import { NgModule } from '@angular/core';
import { BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { BorderCardDirective} from "./pokemon/border-card.directive";
import { PokemonTypeColorPipe} from "./pokemon/pokemon-type-color.pipe";
import { ListPokemonComponent} from "./pokemon/list-pokemon/list-pokemon.component";
import { DetailPokemonComponent} from "./pokemon/detail-pokemon/detail-pokemon.component";


@NgModule({
  declarations: [
  ],
  imports: [
      BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
