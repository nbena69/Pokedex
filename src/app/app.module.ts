import { NgModule } from '@angular/core';
import { BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { BorderCardDirective} from "./border-card.directive";
import { PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import { ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";


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
