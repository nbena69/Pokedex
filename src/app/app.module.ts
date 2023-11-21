import { NgModule } from '@angular/core';
import { BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { BorderCardDirective} from "./border-card.directive";
import { PokemonTypeColorPipe} from "./pokemon-type-color.pipe";


@NgModule({
  declarations: [
      AppComponent,
      BorderCardDirective,
      PokemonTypeColorPipe
  ],
  imports: [
      BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
